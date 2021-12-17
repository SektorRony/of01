var slideIndex = 0;
showSlides(slideIndex);
autoShowSlides();
setGreenHeader();
changePictures();
window.onresize = ()=>{

    document.location.reload();

}

function toggleMenu(){

    let index;
    let iconEl = document.querySelector('.mobile-menu svg');
    let menuMobileEl = document.querySelector('.list-mobile');

    for(index = 0; index <= iconEl.classList.length; index ++){

        if(iconEl.classList[index] === 'fa-bars'){
            iconEl.classList.replace('fa-bars', 'fa-window-close');
            menuMobileEl.style.display = 'flex';
        }else if(iconEl.classList[index] === 'fa-window-close'){
            iconEl.classList.replace('fa-window-close', 'fa-bars');
            menuMobileEl.style.display ='none';
        }
    }

    console.log(iconEl.classList);
}

//Next / previous controls

function plusSlides(n) {
    showSlides(slideIndex += n);
}

//thumbnail image controls

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    };
    if (n < 1) {
        slideIndex = slides.length;
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}


//Altera as imagens para o dispositivo movel

function changePictures(){
   
    let imagesEL = document.querySelectorAll('.mySlides img');
    
    if (window.screen.availWidth === 360){

        imagesEL[0].src = './img/Janaina.jpg';
        imagesEL[1].src = './img/Andresa_II.jpg';
        imagesEL[2].src = './img/Luciene.jpg';

    }
}

function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slideIndex > slides.length) { slideIndex = 1 }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(autoShowSlides, 5000); // Change image every 2 seconds
}

function setGreenHeader(){

    let headerEl = document.querySelector('.navbar');
    let menuMobileEl = document.querySelector('.list-mobile');

    window.addEventListener('scroll', e=>{

        if(window.scrollY < 10){
            headerEl.style.backgroundColor = 'rgba(3, 139, 73, 0.55)';
            menuMobileEl.style.backgroundColor = 'rgba(3, 139, 73, 0.55)';
        }else{
            headerEl.style.backgroundColor = 'rgba(3, 139, 73, 1)';
            menuMobileEl.style.backgroundColor = 'rgba(3, 139, 73, 1)';
        }
    })
}

/* função de animação */

const target = document.querySelectorAll('[data-animate]');
const animationClass = 'animate';

const animeScroll = ()=>{

    const windowTop = window.scrollY + (window.innerHeight * 0.75);

    target.forEach(e=>{

        if(windowTop > e.offsetTop){
            e.classList.add(animationClass);
        }else{
            e.classList.remove(animationClass);
        }
         
    })

}

window.addEventListener('scroll', animeScroll);