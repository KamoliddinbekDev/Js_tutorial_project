"use strict";

// ----------------------- classList

const btns = document.querySelectorAll("button");

//console.log(btns[0].classList.value);
//console.log(btns[0].classList.item(1));

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

// ----------------------- delegatsiya

const wrapper = document.querySelector(".btn-block");

wrapper.addEventListener("click", (e) => {
    // console.log(e.target);
    if(e.target && e.target.tagName == "BUTTON" && e.target.classList.contains("blue")) {
	console.log("Blue button clicked");
    }
});

btns.forEach(btn => btn.addEventListener("click", () => console.log("button clicked")));

const newBtn = document.createElement("button");
newBtn.classList.add("blue");
wrapper.append(newBtn);

//

