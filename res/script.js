// Highlight code block
const codeBlocks = document.querySelectorAll("pre code");
for (let code of codeBlocks) {
    code.innerHTML = code.innerHTML.trim();
    hljs.highlightBlock(code);
}

// Auto link bracket surrounded to module
const ps = document.querySelectorAll(".screen p");
for(let p of ps) {
    p.innerHTML = p.innerHTML.replace(/{(.+?)}/g, (match, capture) => {
        return `<a href="https://github.com/GMartigny/pencil.js/blob/master/modules/${capture.toLowerCase()}">${capture}</a>`
    });
}

// Prepare tooltip
const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
document.body.appendChild(tooltip);

// Add tooltip to code notes
const notes = document.querySelectorAll(".note");
for (let note of notes) {
    note.addEventListener("mousemove", (event) => {
        tooltip.classList.add("shown");
        tooltip.style.left = `${event.clientX + 10}px`;
        tooltip.style.top = `${event.clientY - 10}px`;
        tooltip.innerHTML = decodeURIComponent(note.dataset.note);
    });
    note.addEventListener("mouseleave", () => {
        tooltip.classList.remove("shown");
    });
}
