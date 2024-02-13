"use strict";
const btns = document.querySelectorAll("button");

console.log(btns[0].classList.value);
console.log(btns[0].classList.item(1));

btns[1].classList.add("blue");
btns[1].classList.remove("blue");
btns[0].classList.remove("blue");

btns[0].addEventListener("click", () => {
    // btns[1].classList.toggle("blue");
    //
    if(btns[1].classList.contains("blue")) {
	btns[1].classList.remove("blue");
    } else {
	btns[1].classList.add("blue");
    }
});
