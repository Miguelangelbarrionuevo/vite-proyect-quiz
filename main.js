import './style.css'

const preguntasYRespuestas = [
    {
        pregunta: "What is the capital of France?",
        respuestas: ["London", "Berlín", "Paris", "Madrid"]
    },
    {
        pregunta: "What is the longest river in the world?",
        respuestas: ["Amazonas", "Nilo", "Yangtsé", "Miño"]
    },
    {
        pregunta: "Who wrote Romeo and Juliet?",
        respuestas: ["Jane Austen", "Cervantes", "William Shakespeare", "Charles Dickens"]
    },
    {
        pregunta: "How many planets are there in our solar system?",
        respuestas: ["7", "8", "9", "10"]
    }
];

let queFraseEstas = 0;

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

div.className = "container";
h2.textContent = "Quiz Question";
p.textContent = preguntasYRespuestas[0].pregunta;
button1.textContent = preguntasYRespuestas[0].respuestas[0];
button2.textContent = preguntasYRespuestas[0].respuestas[1];
button3.textContent = preguntasYRespuestas[0].respuestas[2];
button4.textContent = preguntasYRespuestas[0].respuestas[3];
button5.textContent = "Previous";
button6.textContent = "Next";

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
div1.append(button5, button6);

ul.classList.add("container-answers");
div.classList.add("container");
button1.classList.add("answer-btn");
button2.classList.add("answer-btn");
button3.classList.add("answer-btn");
button4.classList.add("answer-btn");
button5.classList.add("footer-btn");
button6.classList.add("footer-btn");
div1.classList.add("container-footer");

button5.disabled = true;
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
}

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
