const button = document.querySelector("#view");
const detail = document.querySelector("#detail");

button.onclick = () => {
    detail.classList.toggle("hidden");
}