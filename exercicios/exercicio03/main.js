const listaCores = document.querySelector("[data-lista]")
const buttonShow = document.querySelector("[data-buttonShow]")
const buttonHide = document.querySelector("[data-buttonHide]")

buttonShow.addEventListener("click", (evento) => {
    console.log("mostrar");
    listaCores.setAttribute("data-lista", "mostrar");
});

buttonHide.addEventListener("click", (evento) => {
    console.log("esconder");
    listaCores.setAttribute("data-lista", "esconder");
    
});