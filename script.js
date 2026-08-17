const totalCartas = 45;
let barajaCompleta = [];

for (let i = 1; i <= totalCartas; i++) {
    barajaCompleta.push({
        id: i,
        img: `${i}.png`
    });
}

const tableroHTML = document.getElementById("tablero");
const btnReiniciar = document.getElementById("btnReiniciar");

function generarTabla() {
    tableroHTML.innerHTML = "";
    let barajaMezclada = [...barajaCompleta].sort(() => Math.random() - 0.5);
    let misCartas = barajaMezclada.slice(0, 16);

    misCartas.forEach(carta => {
        const divCarta = document.createElement("div");
        divCarta.classList.add("carta");

        const imagen = document.createElement("img");
        imagen.src = carta.img;

        divCarta.appendChild(imagen);
        divCarta.addEventListener("click", () => {
            divCarta.classList.toggle("marcada");
        });

        tableroHTML.appendChild(divCarta);
    });
}

generarTabla();
btnReiniciar.addEventListener("click", generarTabla);