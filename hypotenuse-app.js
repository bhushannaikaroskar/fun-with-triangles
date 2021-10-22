

const sides = document.querySelectorAll(".side-input");
const hypotenuseButton = document.querySelector("#hypotenuse-button");
const outputElement = document.querySelector("#output");

function sumOFSquares(a,b){  
    const sum = a**2 + b**2;
    return sum;
}

function calculateHypotenuse(){
    
    const side1 = Number(sides[0].value);
    const side2 = Number(sides[1].value);
    const sum = sumOFSquares(side1,side2);

    const lengthOfHypotenuse = Math.sqrt(sum);
    outputElement.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse;

}

hypotenuseButton.addEventListener("click",calculateHypotenuse);