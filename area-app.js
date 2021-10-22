
const inputs = document.querySelectorAll(".input-field");
const areaButton = document.querySelector("#area-button");
const outputElement = document.querySelector("#output");

function calculateArea(){

    const height = Number(inputs[0].value);
    const base = Number(inputs[1].value);

    const area = base*height/2;
    outputElement.innerText = "Area of Triangle is: " + area;
}

areaButton.addEventListener("click",calculateArea);