const returnTop = document.querySelector('#arrowTop');
const header = document.querySelector('#header');
const windowHeight = window.innerHeight;
const nbPixels = windowHeight/4;
const boutonNouveaut = document.querySelector('#boutonNouveaute');

document.addEventListener("scroll", () => {
    if (window.scrollY > (nbPixels)){
        returnTop.classList.add('appear');
        if(window.innerWidth < 1023){
            header.classList.add('smallHeaderMobile');
        }else{
            header.classList.add('smallHeader');
        }      
    }else if(window.scrollY < 200){
        returnTop.classList.remove('appear');
        if(window.innerWidth < 1023){
            header.classList.remove('smallHeaderMobile');
        }else{
            header.classList.remove('smallHeader');
        }  
    }
})
addEventListener("resize", () => {
    if(window.innerWidth < 1023){
        boutonNouveaut.classList.add('btn-outline-dark');
    }else{
        boutonNouveaut.classList.remove('btn-outline-dark');
    }
})


