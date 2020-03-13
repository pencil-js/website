// Auto link bracket surrounded to module
const ps = document.querySelectorAll(".screen p");
for(let p of ps) {
    p.innerHTML = p.innerHTML.replace(/{(.+?)}/g, (match, capture) => {
        return `<a href="https://github.com/GMartigny/pencil.js/blob/master/modules/${capture.toLowerCase()}">${capture}</a>`
    });
}
