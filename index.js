let rasm = document.querySelector(".rasm")


function blur1() {
    rasm.style.filter = "blur(5px)"
}


function contrast1() {
    rasm.style.filter = "contrast(200%)"
}

function Opacity1() {
    rasm.style.filter = "Opacity(0.5)"
}



function Brightness1() {
    rasm.style.filter = "Brightness(0.4)"
}

function Grayscale1() {
    rasm.style.filter = "grayscale(50%)"
}











function double1() {
    rasm.style.border = "5px double black"
}



function dotted1() {
    rasm.style.border = "10px dotted blue"
}


function solid1() {
    rasm.style.border = "8px solid yellow"
}

function dashed1() {
    rasm.style.border = "5px dashed green"
}

function none1() {
    rasm.style.border = "none"
}







// classList
// add() = qoshish
// remove() = ochirish
// toggle() = ochirib yoqish

let body = document.body

 function lightMode() {
    body.classList.add("light")
     body.classList.remove("dark")
 }

function darkMode() {
    body.classList.add("dark")
    body.classList.remove("light")
}