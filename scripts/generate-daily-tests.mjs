import fs from 'node:fs';
import path from 'node:path';

const dailyChallengesDir = path.join('src', 'Daily Coding Challenges');
const args = process.argv.slice(2).filter((arg) => arg !== '--');

if (args.length > 0) {
  exitWithUsage('This script does not accept arguments.');
}

const results = getMissingTestFiles().map(generateTest);
const generated = results.filter((result) => result.status === 'generated');
const skipped = results.filter((result) => result.status === 'skipped');

console.log(`Generated ${generated.length} daily test file(s).`);

if (skipped.length > 0) {
  console.log(`Skipped ${skipped.length} file(s) without a Tests section.`);
}

function exitWithUsage(message) {
  console.error(message);
  console.error('');
  console.error('Usage:');
  console.error('  pnpm run test:daily:generate');
  process.exit(1);
}

function getMissingTestFiles() {
  return fs
    .readdirSync(dailyChallengesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d{4}-\d{2}$/.test(entry.name))
    .flatMap((entry) => getMissingTestFilesForMonth(entry.name));
}

function getMissingTestFilesForMonth(month) {
  const monthDir = path.join(dailyChallengesDir, month);

  return fs
    .readdirSync(monthDir)
    .filter((file) => new RegExp(`^${month}-\\d{2}\\.js$`).test(file))
    .sort()
    .map((file) => path.join(monthDir, file))
    .filter((sourcePath) => !hasTestFile(sourcePath));
}

function hasTestFile(sourcePath) {
  const fileName = path.basename(sourcePath);
  const testPath = path.join(
    path.dirname(sourcePath),
    'test',
    fileName.replace('.js', '.test.js'),
  );

  return fs.existsSync(testPath);
}

function generateTest(sourcePath) {
  let source = fs.readFileSync(sourcePath, 'utf8');
  const tests = getWaitingTests(source);

  if (tests.length === 0) {
    return { sourcePath, status: 'skipped' };
  }

  const functionName = getFunctionName(source, sourcePath);

  source = addExport(source, functionName);
  fs.writeFileSync(sourcePath, source);

  const testDir = path.join(path.dirname(sourcePath), 'test');
  fs.mkdirSync(testDir, { recursive: true });

  const fileName = path.basename(sourcePath);
  const testPath = path.join(testDir, fileName.replace('.js', '.test.js'));
  fs.writeFileSync(
    testPath,
    buildTestFile(fileName, functionName, tests, isOrderInsensitive(source)),
  );

  return { sourcePath, status: 'generated' };
}

function getFunctionName(source, sourcePath) {
  const match = source.match(
    /\n(?:export\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/,
  );

  if (!match) {
    throw new Error(`No function declaration found in ${sourcePath}`);
  }

  return match[1];
}

function getWaitingTests(source) {
  const testSection = getInitialCommentTestSection(source);

  if (!testSection) {
    return [];
  }

  return testSection
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('Waiting:'))
    .map(parseWaitingLine);
}

function getInitialCommentTestSection(source) {
  const initialComment = source.match(/^\s*\/\*\*([\s\S]*?)\*\//);

  if (!initialComment) {
    return null;
  }

  const testsIndex = initialComment[1].indexOf('Tests:');

  if (testsIndex === -1) {
    return null;
  }

  return initialComment[1].slice(testsIndex);
}

function addExport(source, functionName) {
  return source.replace(
    new RegExp(`\\n(?:export\\s+)?function\\s+${functionName}\\s*\\(`),
    `\nexport function ${functionName}(`,
  );
}

function parseWaitingLine(line) {
  const match = line.match(
    /^Waiting:\d+\.\s+(.+?)\s+should return\s+(.+?)(?:\.)?$/,
  );

  if (!match) {
    throw new Error(`Unable to parse test line: ${line}`);
  }

  const [, callExpression, expectedSource] = match;
  const alternatives = splitTopLevelAlternatives(expectedSource).map(
    normalizeExpectedSource,
  );

  return {
    callExpression,
    expectedLabel: expectedSource,
    expectedSource: normalizeExpectedSource(expectedSource),
    alternatives:
      alternatives.length > 1 && expectedSource.includes(' or ')
        ? alternatives
        : null,
    name: `${callExpression} should return ${expectedSource}`,
  };
}

function normalizeExpectedSource(expectedSource) {
  return expectedSource === 'None' ? "'None'" : expectedSource;
}

function splitTopLevelAlternatives(source) {
  const parts = [];
  let current = '';
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let i = 0; i < source.length; i++) {
    const char = source[i];

    if (quote) {
      current += char;

      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }

      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      current += char;
      continue;
    }

    if (char === '[' || char === '{' || char === '(') {
      depth++;
    } else if (char === ']' || char === '}' || char === ')') {
      depth--;
    }

    if (depth === 0 && source.startsWith(', or ', i)) {
      parts.push(current.trim());
      current = '';
      i += ', or '.length - 1;
      continue;
    }

    if (depth === 0 && source.startsWith(' or ', i)) {
      parts.push(current.trim());
      current = '';
      i += ' or '.length - 1;
      continue;
    }

    if (depth === 0 && char === ',') {
      parts.push(current.trim());
      current = '';
      if (source[i + 1] === ' ') i++;
      continue;
    }

    current += char;
  }

  parts.push(current.trim());
  return parts.filter(Boolean);
}

function buildTestFile(fileName, functionName, tests, orderInsensitive) {
  const testBody = tests
    .map((test) => buildTestCase(test, orderInsensitive))
    .join('\n\n');
  const helpers = orderInsensitive
    ? `
function canonicalize(value) {
  if (!Array.isArray(value)) {
    return value;
  }

  return value
    .map(canonicalize)
    .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
}
`
    : '';

  return `import { describe, expect, it } from 'vitest';

import { ${functionName} } from '../${fileName}';
${helpers}

describe('${functionName}', () => {
${testBody}
});
`;
}

function buildTestCase(test, orderInsensitive) {
  if (test.alternatives) {
    return `  it(${JSON.stringify(test.name)}, () => {
    const expectedResults = [
${test.alternatives.map((alternative) => `      ${alternative},`).join('\n')}
    ];

    expect(expectedResults).toContainEqual(${test.callExpression});
  });`;
  }

  if (orderInsensitive) {
    return `  it(${JSON.stringify(test.name)}, () => {
    expect(canonicalize(${test.callExpression})).toEqual(canonicalize(${test.expectedSource}));
  });`;
  }

  return `  it(${JSON.stringify(test.name)}, () => {
    expect(${test.callExpression}).toEqual(${test.expectedSource});
  });`;
}

function isOrderInsensitive(source) {
  const initialComment = source.match(/^\s*\/\*\*([\s\S]*?)\*\//);

  return initialComment?.[1].includes("Return order doesn't matter.") ?? false;
}
