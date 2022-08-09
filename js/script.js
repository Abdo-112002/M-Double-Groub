
AOS.init();

//navBar menu
let menuBtn = document.querySelector('.header__menu');
let menu = document.querySelector('.header__navLinks');
menuBtn.addEventListener('click', () => { 
    menu.classList.toggle("active");
});

// close nav list when click on any nav link
document.addEventListener("click",(eo) => {
    if(eo.target.closest(".header__navLinks--item")){
        menu.classList.remove("active");
    }
});


// header style when user scroll down
let header = document.querySelector(".header");
window.onscroll = function() {
    if(this.scrollY > 50){
        header.style.cssText = `
                padding: 10px 0px; background: #F7F7FF;
                box-shadow: 0rem .5rem 1rem rgba(0,0,0,0.2);
        ` ;
        // document.querySelector(".scrollTop").style.right = "15px";
    }else{
        header.style.cssText = "padding: 0px 0px";
        // document.querySelector(".scrollTop").style.right = "-100%";
    }
}


// dynamic Accordion
let accordionHeader = document.querySelectorAll('.accordion-header');
let accordionBody = document.querySelectorAll('.accordion-body');
accordionHeader.forEach((item , ind) => {
    item.addEventListener('click',(e) => {
        accordionBody.forEach((dd) => {
            if(e.target.nextElementSibling !== dd && dd.classList.contains("actives")) {
                dd.classList.remove("actives");
                accordionHeader.forEach((acc) => {
                    acc.classList.remove("actives");
                });
            }
        });

        let content = item.nextElementSibling;
        content.classList.toggle("actives");
        item.classList.toggle("actives");

        if(item.classList.contains('actives')){
            let icon = item.querySelector('i');
            icon.className = "bx bx-minus";
        }else{
            let icon = item.querySelector('i');
            icon.className = "bx bx-plus";
        }
    });
});