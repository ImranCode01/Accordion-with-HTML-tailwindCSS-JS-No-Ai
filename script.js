let btn = document.querySelector("#btn");
let arrow = document.querySelector("#arrow");
let pannel = document.querySelector("#pannel")

let btn2 = document.querySelector("#btn2");
let arrow2 = document.querySelector("#arrow2");
let pannel2 = document.querySelector("#pannel2")

let btn3 = document.querySelector("#btn3");
let arrow3 = document.querySelector("#arrow3");
let pannel3 = document.querySelector("#pannel3")

btn.addEventListener("click", () => {
    arrow.classList.toggle("rotate-90");
    pannel.classList.toggle("max-h-96");

    pannel2.classList.remove("max-h-96")
    pannel3.classList.remove("max-h-96") 

    arrow2.classList.remove("rotate-90");
    arrow3.classList.remove("rotate-90");
})

btn2.addEventListener("click", () => {
    arrow2.classList.toggle("rotate-90");
    pannel2.classList.toggle("max-h-96");
    
    pannel.classList.remove("max-h-96")
    pannel3.classList.remove("max-h-96")

    arrow.classList.remove("rotate-90");
    arrow3.classList.remove("rotate-90");
})

btn3.addEventListener("click", () => {
    arrow3.classList.toggle("rotate-90");
    pannel3.classList.toggle("max-h-96");
    
    pannel.classList.remove("max-h-96")
    pannel2.classList.remove("max-h-96")

    arrow.classList.remove("rotate-90");
    arrow2.classList.remove("rotate-90");
})