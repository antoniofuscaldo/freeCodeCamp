const input = document.getElementById('markdown-input'),
  htmlOutput = document.getElementById('html-output'),
  preview = document.getElementById('preview');

function convertInline(s) {
  if (!s) return '';
  let r = s;
  r = r.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');
  r = r.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  r = r.replace(/\*\*([\s\S]*?)\*\*/g, '<strong>$1</strong>');
  r = r.replace(/__([\s\S]*?)__/g, '<strong>$1</strong>');
  r = r.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  r = r.replace(/_([^_]+)_/g, '<em>$1</em>');
  return r;
}

function convertLine(line) {
  const h = line.match(/^\s*(#{1,3})\s+(.*)$/);
  if (h) {
    const level = h[1].length;
    return `<h${level}>${convertInline(h[2])}</h${level}>`;
  }
  const q = line.match(/^\s*>\s+(.*)$/);
  if (q) return `<blockquote>${convertInline(q[1])}</blockquote>`;
  return convertInline(line);
}

function convertMarkdown() {
  const text = input ? input.value : '',
    parts = text.split(/\r?\n/).map(convertLine);
  return parts.join('');
}

function update() {
  const html = convertMarkdown();
  if (htmlOutput) htmlOutput.textContent = html;
  if (preview) preview.innerHTML = html;
}

if (input) {
  input.addEventListener('input', update);
  update();
}

window.convertMarkdown = convertMarkdown;
