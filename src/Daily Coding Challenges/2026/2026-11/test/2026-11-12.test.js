import { describe, expect, it } from 'vitest';

import { generateSignature } from '../2026-11-12.js';

describe('generateSignature', () => {
  it('generateSignature("Quinn Waverly", "Founder and CEO", "TechCo") should return "--Quinn Waverly, Founder and CEO at TechCo"', () => {
    expect(
      generateSignature('Quinn Waverly', 'Founder and CEO', 'TechCo'),
    ).toEqual('--Quinn Waverly, Founder and CEO at TechCo');
  });

  it('generateSignature("Alice Reed", "Engineer", "TechCo") should return ">>Alice Reed, Engineer at TechCo"', () => {
    expect(generateSignature('Alice Reed', 'Engineer', 'TechCo')).toEqual(
      '>>Alice Reed, Engineer at TechCo',
    );
  });

  it('generateSignature("Tina Vaughn", "Developer", "example.com") should return "::Tina Vaughn, Developer at example.com"', () => {
    expect(
      generateSignature('Tina Vaughn', 'Developer', 'example.com'),
    ).toEqual('::Tina Vaughn, Developer at example.com');
  });

  it('generateSignature("B. B.", "Product Tester", "AcmeCorp") should return ">>B. B., Product Tester at AcmeCorp"', () => {
    expect(generateSignature('B. B.', 'Product Tester', 'AcmeCorp')).toEqual(
      '>>B. B., Product Tester at AcmeCorp',
    );
  });

  it('generateSignature("windstorm", "Cloud Architect", "Atmospheronics") should return "::windstorm, Cloud Architect at Atmospheronics"', () => {
    expect(
      generateSignature('windstorm', 'Cloud Architect', 'Atmospheronics'),
    ).toEqual('::windstorm, Cloud Architect at Atmospheronics');
  });
});
