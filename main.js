// BARRA LATERAL DEL NAVEGADOR
document.querySelector('.menu-btn')
.addEventListener('click' , function(){
    document.querySelector('.nav-menu').classList.toggle('show');
});

// SCROLL REVEAL
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.columns' , { delay: 500});
ScrollReveal().reveal('.first-banner' , { delay: 500});
ScrollReveal().reveal('.columns2' , { delay: 500});
ScrollReveal().reveal('.second-banner' , { delay: 500});
ScrollReveal().reveal('.social' , { delay: 500});