//HOME PAGE HERO SECTION
const sliderContainer =document.querySelector('.slider');
const slides=document.querySelectorAll('.slide');
const caption=document.querySelectorAll('.caption');

let index=0;
let interval;

function showSlides(i){
  slides.forEach((slide,index)=>{
    slide.classList.remove('active','exit');
    if (index===i){
      slide.classList.add('active');
    }else if(index<i){
      slide.classList.add('exit');
    }

  });
  
  caption.forEach((caption)=>{
    caption.classList.remove('active');
  });

  caption[i].classList.add('active');
  slides[i].classList.add('active');
}

function changeSlides(step){
  index=(index + step +slides.length)%slides.length;
  showSlides(index);
}

function  AutoRotateSlides(){
  interval= setInterval(()=>changeSlides(1),7000);
}

AutoRotateSlides();