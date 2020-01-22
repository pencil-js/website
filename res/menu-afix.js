// Auto create a side menu
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
