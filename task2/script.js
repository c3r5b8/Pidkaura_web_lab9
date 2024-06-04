function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

window.addEventListener("DOMContentLoaded", () => {
    // Get the element by id
    const element = document.getElementById("block2");
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstartHandler);
});