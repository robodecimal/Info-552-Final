import { gsap } from "gsap";


 //check menu on page load, if below 1024 hide it for mobile use
//listen to window resize
window.addEventListener("resize", displayWindowSize);

//check the window size on load
window.addEventListener('load', displayWindowSize); 

let menu = document.querySelector("#nav-container");
let menuHeight = menu.offsetHeight;

function displayWindowSize(){
    // check the view port view and see if the menu needs to be moved
    if(document.documentElement.clientWidth <= 1024){
        console.log("hide");
        gsap.set("#nav-container",{y:-menuHeight - 100});
    }else{
        console.log("un-hide");
        gsap.set("#nav-container",{y:0});
    }
}

//open mobile menu
let openBtn = document.querySelector("#open-btn");
openBtn.addEventListener("click", function(){
    // slide the menu down
    gsap.to("#nav-container",{duration:0.25, y:0});
})

// close mobile menu
let closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click",function(){
    console.log("close");
     // slide the menu up
     gsap.to("#nav-container",{duration:0.25, y:-menuHeight - 100});
})