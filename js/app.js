let elInput = document.querySelector(".input-width");
let elInput1 = document.querySelector(".input-height");
let elInput2 = document.querySelector(".input-radius");
let elInput3 = document.querySelector(".input-color");
let elFigure = document.getElementById("figure");
let elForm = document.querySelector(".form");

const widthFunction = () =>{
    const inputVal = elInput.value
    elFigure.style.width = inputVal + "px"; 
    const inputVal1 = elInput1.value
    elFigure.style.height = inputVal1 + "px"; 
    const inputVal2 = elInput2.value
    elFigure.style.borderRadius = inputVal2 + "%"; 
    const inputVal3 = elInput3.value
    elFigure.style.backgroundColor = inputVal3; 
};
