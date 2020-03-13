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
