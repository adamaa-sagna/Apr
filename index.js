'use strict'


const nav = document.querySelector('#scroll');
console.log(nav);
const navTop = nav.offsetTop;
// console.log(navTop);

function posStickyNav(){

    // console.log('navTop =' + navTop)
    // console.log('scrolly =' + window.scrollY);

    if(window.scrollY >= navTop){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
} 
window.addEventListener('scroll', posStickyNav);

let i = 0;
let images = [];
let time = 2000;

// liste d'images

images[0] = 'image1.jpg';
images[1] = 'image2.png';
images[2] = 'image3.png';

// change d'images

function changeImg(){
    document.slide.src = images[i];
    document.slide1.src = images[i];
    document.slide2.src = images[i];

    if(i < images.length-1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;
