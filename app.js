
const inputs = document.querySelectorAll(".angle-input");
const triangleButton = document.querySelector("#triangle-btn");
const outputElement = document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3){
    const sum = angle1 + angle2 + angle3;
    return sum;
}

function isTriangle(){
    const angle1 = Number(inputs[0].value);
    const angle2 = Number(inputs[1].value);
    const angle3 = Number(inputs[2].value);
    const sum = calculateSumOfAngles(angle1,angle2,angle3);
    if(sum === 180){
        outputElement.innerText = "Yay its an Triangle"
    }else{
        outputElement.innerText = "Oh no its not a Triangle"
    }
}

triangleButton.addEventListener("click",isTriangle);            