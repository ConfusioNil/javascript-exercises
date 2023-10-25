const para = document.createElement('p');

const div = document.querySelector(".content");
div.textContent = "I am red";
div.style.color = "red";

para.style.color = 'red';
para.textContent = "I am also red";
div.appendChild(para);

const h1 = document.createElement("h1");
h1.style.color = 'blue';
h1.textContent = "I am blue!";
div.appendChild(h1);

const divPink = document.createElement("div");
divPink.classList.add("div-pink");
divPink.setAttribute("style", "border-color: black; background-color: pink;");

para2 = document.createElement("p");
para2.textContent = "I'm in the div";

h1_2 = document.createElement("h1");
h1_2.textContent = "Me too!";

divPink.appendChild(para2);
divPink.appendChild(h1_2);

div.appendChild(divPink);