import './style.css';

const preguntasYRespuestas = [
    {
        pregunta: "What is the capital of France?",
        respuestas: ["London", "Berlín", "Paris", "Madrid"],
        correcta: 2
    },
    {
        pregunta: "What is the longest river in the world?",
        respuestas: ["Amazonas", "Nilo", "Yangtsé", "Miño"],
        correcta: 0
    },
    {
        pregunta: "Who wrote Romeo and Juliet?",
        respuestas: ["Jane Austen", "Cervantes", "William Shakespeare", "Charles Dickens"],
        correcta: 2
    },
    {
        pregunta: "How many planets are there in our solar system?",
        respuestas: ["7", "8", "9", "10"],
        correcta: 1
    }
];

let queFraseEstas = 0;
const selectedOptions = {};

const div = document.createElement("div");
const h2 = document.createElement("h2");
const p = document.createElement("p");
const ul = document.createElement("ul");
const li = document.createElement("li");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const div1 = document.createElement("div");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
const button5 = document.createElement("button");
const button6 = document.createElement("button");
const button7 = document.createElement("button");

div.className = "container";
h2.textContent = "Quiz Question";
p.textContent = preguntasYRespuestas[0].pregunta;
button1.textContent = preguntasYRespuestas[0].respuestas[0];
button2.textContent = preguntasYRespuestas[0].respuestas[1];
button3.textContent = preguntasYRespuestas[0].respuestas[2];
button4.textContent = preguntasYRespuestas[0].respuestas[3];
button5.textContent = "Previous";
button6.textContent = "Next";
button7.textContent = "Check";

document.body.appendChild(div);
div.append(h2, p, ul, div1);
ul.append(li);
ul.append(li1);
ul.append(li2);
ul.append(li3);
li.append(button1);
li1.append(button2);
li2.append(button3);
li3.append(button4);
div1.append(button5, button6, button7);

ul.classList.add("container-answers");
div.classList.add("container");
button1.classList.add("answer-btn");
button2.classList.add("answer-btn");
button3.classList.add("answer-btn");
button4.classList.add("answer-btn");
button5.classList.add("footer-btn");
button6.classList.add("footer-btn");
button7.classList.add("footer-btn");
div1.classList.add("container-footer");

button5.disabled = true;
button7.disabled = true;

button6.addEventListener("click", () => {
    button5.disabled = false;
});


function updateQuestion() {
    p.textContent = preguntasYRespuestas[queFraseEstas].pregunta;
    button1.textContent = preguntasYRespuestas[queFraseEstas].respuestas[0];
    button2.textContent = preguntasYRespuestas[queFraseEstas].respuestas[1];
    button3.textContent = preguntasYRespuestas[queFraseEstas].respuestas[2];
    button4.textContent = preguntasYRespuestas[queFraseEstas].respuestas[3];
    button5.disabled = queFraseEstas === 0;
    button6.disabled = queFraseEstas === preguntasYRespuestas.length - 1;
    
    [button1, button2, button3, button4].forEach((btn) => {
        btn.style.backgroundColor = "";
    });
    
    if (selectedOptions[queFraseEstas] !== undefined) {
        const selectedIndex = selectedOptions[queFraseEstas];
        [button1, button2, button3, button4][selectedIndex].style.backgroundColor = "#3CB371";
    }
}

function seleccionarOpcion(boton) {
    [button1, button2, button3, button4].forEach((btn) => {
        btn.style.backgroundColor = "";
    });
    boton.style.backgroundColor = "#3CB371";
    
    const selectedIndex = [button1, button2, button3, button4].indexOf(boton);
    selectedOptions[queFraseEstas] = selectedIndex;

    if (Object.keys(selectedOptions).length === 4) {
        button7.disabled = false;
    }
}

function calcularCorrectas() {
    let correctas = 0;
    for (let i = 0; i < preguntasYRespuestas.length; i++) {
        if (selectedOptions[i] === preguntasYRespuestas[i].correcta) {
            correctas++;
        }
    }
    return correctas;
}

// Función para crear y mostrar el modal
function createModal() {
    const overlay = document.createElement('div');
    overlay.className = 'modal';
    overlay.addEventListener('click', closeModal);

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.addEventListener('click', (event) => event.stopPropagation());

    const closeButton = document.createElement('span');
    closeButton.className = 'modal-close';
    closeButton.textContent = 'X';
    closeButton.addEventListener('click', closeModal);

    const modalTitle = document.createElement('h2');
    modalTitle.textContent = 'Resultados del Quiz';

    const modalhr = document.createElement('hr');
    
    const modalMessage = document.createElement('p');
    modalMessage.textContent = `Has acertado ${calcularCorrectas()} de 4 preguntas.`;

    modalContent.append(closeButton, modalTitle, modalhr,modalMessage);
    overlay.append(modalContent);
    document.body.appendChild(overlay);

    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
}

// Función para cerrar el modal
function closeModal() {
    const overlay = document.querySelector('.modal');
    if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        setTimeout(() => overlay.remove(), 300);
    }
}

[button1, button2, button3, button4].forEach((button) => {
    button.addEventListener("click", () => seleccionarOpcion(button));
});

button6.addEventListener("click", () => {
    if (queFraseEstas < preguntasYRespuestas.length - 1) {
        queFraseEstas++;
        updateQuestion();
    }
});

button5.addEventListener("click", () => {
    if (queFraseEstas > 0) {
        queFraseEstas--;
        updateQuestion();
    }
});

button7.addEventListener("click", createModal);

updateQuestion();
