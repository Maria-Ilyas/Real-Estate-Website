const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("menu");
const close = document.getElementById("close");

menu.addEventListener("click", () => {
    sidebar.style.display = "flex";
});

close.addEventListener("click", () => {
    sidebar.style.display = "none";
})

