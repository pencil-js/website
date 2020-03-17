export default async (pens) => {
    const examples = document.querySelectorAll(".example");

    await Promise.all([...examples].map(async (example, index) => {
        const url = `./examples/${example.dataset.script}.min.js`;
        const response = await fetch(url);
        if (response.ok) {
            const code = await response.text();

            const preWrapper = document.createElement("pre");
            const codeElm = document.createElement("code");
            codeElm.classList.add("javascript");
            codeElm.textContent = code;
            preWrapper.appendChild(codeElm);
            example.appendChild(preWrapper);
            hljs.highlightBlock(codeElm);

            const wrapper = document.createElement("iframe");
            wrapper.className = "scene";
            example.appendChild(wrapper);

            const id = pens[index];

            const link = document.createElement("a");
            link.href = `https://codepen.io/GMartigny/pen/${id}?editors=0010`;
            link.title = "Edit on Codepen";
            link.className = "codepen";
            example.appendChild(link);
        }
    }));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(({ isIntersecting, target }) => {
            if (isIntersecting && !target.srcdoc) {
                target.srcdoc = `<script type="module" src="./examples/${target.parentNode.dataset.script}.min.js"></script>`;
            }
        })
    }, {
        threshold: 0.5,
    });
    for (let iframe of document.querySelectorAll(".example iframe")) {
        observer.observe(iframe);
    }
};
