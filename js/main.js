"use strict"

/* ESTA FUNÇÃO COLOCA BACKGROUND COLOR NO MENU DO DESKTOP PARA QUANDO FOR ROLAR AS INFORMAÇÕES FICAREM AMIS LEGIVEIS */
function addColorMenu (){
    let menu = document.querySelector(".menu-desktop-color")

    window.addEventListener('scroll', function () {
        if(window.scrollY > 0){
            menu.classList.add("back-color-menu");
        } else{
            menu.classList.remove("back-color-menu")
        }
    })
}
addColorMenu()




/* ESTA FUNÇÃO  VERIFICA OS ELEMENTOS HTML QUE ESTÃO COM AS TAGS DE ANIME, PARA RELIZAR AS ANIMAÇÕES DA PÁGINA*/
const item = document.querySelectorAll("[data-anime]");
const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85

    item.forEach( element => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate")
        } else{
            element.classList.remove("animate")
        }
    })
}

animeScroll()
window.addEventListener("scroll", ()=>{
    animeScroll()
})




/* ESTE CONJUNTO DE CÓDIGO É REFENTE AO SLIDER*/
$('.slider').slick({
  centerMode: true,
  centerPadding: '30px',
  slidesToShow: 3,
  arrows: true,
  setInterval:4000,
  prevArrow: $('.arrow-prev'),
  nextArrow: $('.arrow-next'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider')