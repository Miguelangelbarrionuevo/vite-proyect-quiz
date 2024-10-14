import './style.css'

const frases = [
    "What is the capital of France?",
    "What is the longest river in the world?",
    "Who wrote Romeo and Juliet?",
    "How many planets are there in our solar system?"
]
const respuestas = [
    ["London","Berlín","Paris","Madrid"],
    ["Amazonas", "Nilo", "Yangtsé", "Miño"],
    ["Jane Austen", "Cervantes", "William Shakerpeare", "Charles Dickens"],
    ["7", "8", "9", "10"]
]
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
const button2= document.createElement("button");
const button3= document.createElement("button");
const button4= document.createElement("button");
const button5= document.createElement("button");
const button6= document.createElement("button");



div.className="container";
h2.textContent = "Quiz Question";
p.textContent="What is the capital of France?";
button1.textContent="London";
button2.textContent="Berlin";
button3.textContent="Paris";
button4.textContent="Madrid";
button5.textContent="Previous";
button6.textContent="Next";

document.body.appendChild(div);
div.append(h2,p,ul,div1);
ul.append(li,);
ul.append(li1,);
ul.append(li2,);
ul.append(li3,);
li.append(button1);
li1.append(button2);
li2.append(button3);
li3.append(button4);
div1.append(button5,button6); 

ul.classList.add("container-answers")
div.classList.add("container")
button1.classList.add("answer-btn")
button2.classList.add("answer-btn")
button3.classList.add("answer-btn")
button4.classList.add("answer-btn")
button5.classList.add("footer-btn")
button6.classList.add("footer-btn")
div1.classList.add("container-footer")


button5.disabled = true;
button6.addEventListener("click", () => {
    button5.disabled = false;
});


function updateQuestion() {
    p.textContent = frases[queFraseEstas];
    button1.textContent = respuestas[queFraseEstas][0]
    button2.textContent = respuestas[queFraseEstas][1]
    button3.textContent = respuestas[queFraseEstas][2]
    button4.textContent = respuestas[queFraseEstas][3]
    button5.disabled = queFraseEstas === 0; 
    button6.disabled = queFraseEstas === frases.length -1; 
}


button6.addEventListener("click", () => {
    if (queFraseEstas < frases.length - 1) {
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