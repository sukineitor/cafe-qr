// Lista de frases y elementos visuales asociados
const frasesYElementos = [
    { frase: "Una rosa para otra rosa🌹" },
    { frase: "¡Brilla como una estrella!⭐" },
    { frase: "Un corazón para ti ❤️" },
    { frase: "Un toque de magia ✨" },
    // ... otras frases y elementos
];

let indiceActual = 0; // Para llevar un control de la frase actual

// Función para mostrar la frase en pantalla
function mostrarFrase() {
    const frasesContainer = document.getElementById("frases-container");
    frasesContainer.innerHTML = ""; // Limpiar frases anteriores

    const fraseElement = document.createElement("div");
    fraseElement.className = "frase";
    fraseElement.innerText = frasesYElementos[indiceActual].frase;

    // Establecer posición aleatoria
    const posicionAleatoria = obtenerPosicionAleatoria(fraseElement.offsetWidth, fraseElement.offsetHeight);
    fraseElement.style.position = "absolute"; // Asegúrate de que sea absoluta
    fraseElement.style.left = `${posicionAleatoria.left}px`;
    fraseElement.style.top = `${posicionAleatoria.top}px`;

    frasesContainer.appendChild(fraseElement);

    // Animar la aparición de la frase
    setTimeout(() => {
        fraseElement.style.opacity = 1;
    }, 100); // Aparece inmediatamente

    // Mantener la frase visible por 3 segundos
    setTimeout(() => {
        fraseElement.style.opacity = 0;
    }, 3000); // Mantener la frase por 3 segundos antes de desvanecer

    // Avanzar al siguiente índice
    indiceActual = (indiceActual + 1) % frasesYElementos.length; // Ciclo a través de las frases
}

// Función para obtener una posición aleatoria en la pantalla
function obtenerPosicionAleatoria(anchoFrase, altoFrase) {
    const anchoPantalla = window.innerWidth;
    const altoPantalla = window.innerHeight;
    const margen = 50; // Margen para evitar que las frases se salgan de la pantalla

    // Generar coordenadas aleatorias dentro de los límites de la pantalla
    const left = Math.random() * (anchoPantalla - anchoFrase - 2 * margen) + margen;
    const top = Math.random() * (altoPantalla - altoFrase - 2 * margen) + margen;

    return { left, top };
}
