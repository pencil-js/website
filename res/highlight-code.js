// Highlight code block
const codeBlocks = document.querySelectorAll("pre code");
for (let code of codeBlocks) {
    code.innerHTML = code.innerHTML.trim();
    hljs.highlightBlock(code);
}
