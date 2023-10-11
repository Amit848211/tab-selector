let img0=document.getElementById("img0");
let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let btn1 = document.getElementById("btn1");
let right_side=document.getElementsByClassName("right_side");
btn1.addEventListener("click", change);
let buttons = document.querySelectorAll(".btn");

function change() {
    console.log("step1");
    let p2 = document.getElementById("p2");
    p2.style.display = "none";
    let p3 = document.getElementById("p3");
    p3.style.display = "none";
    let p1 = document.getElementById("p1");
    p1.style.display = "block";

    buttons.forEach(button => {
        button.style.backgroundColor = "lightblue";
    });

    btn1.style.backgroundColor = " rgb(195, 202, 195)";
    img0.style.display="block";
    img1.style.display="none";
    img2.style.display="none";

}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", change1);

function change1() {
    console.log("step2");
    let p1 = document.getElementById("p1");
    p1.style.display = "none";
    let p3 = document.getElementById("p3");
    p3.style.display = "none";
    let p2 = document.getElementById("p2");
    p2.style.display = "block";

    buttons.forEach(button => {
        button.style.backgroundColor = "lightblue";
    });

    btn2.style.backgroundColor = " rgb(195, 202, 195)";
    img0.style.display="none";
    img1.style.display="block";
    img2.style.display="none";

}

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", change2);

function change2() {
    console.log("step3");
    let p1 = document.getElementById("p1");
    p1.style.display = "none";
    let p2 = document.getElementById("p2");
    p2.style.display = "none";
    let p3 = document.getElementById("p3");
    p3.style.display = "block";

    buttons.forEach(button => {
        button.style.backgroundColor = "lightblue";
    });

    btn3.style.backgroundColor = " rgb(195, 202, 195)";

    img0.style.display="none";
    img1.style.display="none";
    img2.style.display="block";

}