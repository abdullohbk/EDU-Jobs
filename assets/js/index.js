"use strict";

let  caruselWrap = document.querySelector(".carusel2");
let caruselLength= document.querySelectorAll(".span-wrap-span")

let caruselCards =document.querySelectorAll('.carusel2-card');
let indx = 0;

function caruselRight() {
    indx ++ ;
    if(indx > caruselCards.length-3){
        indx = 0;
    }else if(indx < 0){
        indx = caruselCards.length-3;
    }

    
    caruselWrap.style.transform = `translateX(${-indx * 465}px)`;
    
}


function caruselLeft() {
    indx -- ;
    if(indx > caruselCards.length-3){
        indx = 0;
    }else if(indx < 0){
        indx = caruselCards.length-3;
    }
    console.log("left carusel");
    caruselWrap.style.transform = `translateX(${-indx * 465}px)`;
}