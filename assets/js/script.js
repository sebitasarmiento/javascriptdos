const img = document.getElementById("imagen");
let clicked = false;
img.addEventListener("click", () => {
    clicked = !clicked;
    if (clicked) {
        img.style.border = "2px solid red";
    } else {
        img.style.border = "none";
    }
});

const stickerUno = document.querySelector(".sticker-uno");
const stickerDos = document.querySelector(".sticker-dos");
const stickerTres = document.querySelector(".sticker-tres");
const resultado = document.querySelector(".resultado");
const btn = document.querySelector(".boton button");

btn.addEventListener("click", () => {
    const cantidadUno = stickerUno.value;
    const cantidadDos = stickerDos.value;
    const cantidadTres = stickerTres.value;

    const totalStickers = Number(cantidadUno) + Number(cantidadDos) + Number(cantidadTres);

    if (totalStickers <= 10) {
        resultado.innerHTML = "Gracias!";
    } else {
        resultado.innerHTML = "Llevas demasiados stickers";
    }
});

const izquierda = document.getElementById("select-izquierda");
const centro = document.getElementById("select-centro");
const derecha = document.getElementById("select-derecha");
const botonVerifica = document.querySelector(".boton-verifica button");
const resultadoFinal = document.querySelector(".contrasena");

botonVerifica.addEventListener("click", () => {
    const password = izquierda.value + centro.value + derecha.value;

    if (password == "911") {
        resultadoFinal.innerHTML = "Contraseña Correcta!";
    } else if (password == "714") {
        resultadoFinal.innerHTML = "Contraseña dos Correcta";
    } else {
        resultadoFinal.innerHTML = "Contraseña incorrecta";
    }
});
