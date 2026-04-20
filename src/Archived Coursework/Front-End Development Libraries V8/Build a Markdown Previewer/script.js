/* global marked */
const defaultMarkdown = `# Heading (H1)
## Sub Heading (H2)
[Visit freeCodeCamp](https://www.freecodecamp.org)
\`inline code\`

\`\`\`
// code block
function hello() {
    console.log("Hello World!");
}
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote example

![Logo](https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg)

**Bolded Text**`,
  editor = document.getElementById('editor'),
  preview = document.getElementById('preview');

marked.setOptions({
  breaks: true,
});

editor.value = defaultMarkdown;
preview.innerHTML = marked.parse(defaultMarkdown);

editor.addEventListener('input', (e) => {
  preview.innerHTML = marked.parse(e.target.value);
});
