const codeBlocks = document.querySelectorAll("pre code");
for (let code of codeBlocks) {
    code.innerHTML = code.innerHTML.trim();
    hljs.highlightBlock(code);
}

const afix = document.createElement("aside");
afix.classList.add("afix");
const toc = document.createElement("ul");
const h2s = document.querySelectorAll("h2");
for (let h2 of h2s) {
    const id = h2.textContent.toLowerCase().replace(/\W/g, "-");
    h2.parentElement.id = id;
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${id}`;
    link.textContent = h2.textContent;
    item.appendChild(link);
    toc.appendChild(item);
}
afix.appendChild(toc);
document.body.appendChild(afix);

const ps = document.querySelectorAll(".screen p");
for(let p of ps) {
    p.innerHTML = p.innerHTML.replace(/{(.+?)}/g, (match, capture) => {
        return `<a href="https://github.com/GMartigny/pencil.js/blob/master/modules/${capture.toLowerCase()}">${capture}</a>`
    });
}

const script = document.createElement("div");
script.classList.add("tooltip");
document.body.appendChild(script);

const notes = document.querySelectorAll("code .note");
for (let note of notes) {
    note.addEventListener("mousemove", (event) => {
        script.classList.add("shown");
        script.style.left = `${event.clientX + 10}px`;
        script.style.top = `${event.clientY - 10}px`;
        script.innerHTML = note.dataset.note;
    });
    note.addEventListener("mouseleave", () => {
        script.classList.remove("shown");
    });
}
