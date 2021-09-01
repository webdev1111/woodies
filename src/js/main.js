function Header(){
    let headerClass = document.querySelector(".header");
    let headerMenuIcon = document.querySelector(".header__menu-icon");
    let headerMenuList = document.querySelector(".header__menu-list");
    let menuIsOpen = false;

    function OpenCloseMenu() {
        headerClass.classList.toggle("headerClose");
        headerClass.classList.toggle("headerOpen");
        if(menuIsOpen == false){
            menuIsOpen = true;
            headerClass.classList.remove("headerScrollBackground");
            headerClass.classList.remove("headerCloseBackground");
            headerClass.classList.add("headerOpenBackground");
        } else {
            menuIsOpen = false;
            if (window.pageYOffset >= 30) {
                headerClass.classList.add("headerScrollBackground");
                headerClass.classList.remove("headerCloseBackground");
                headerClass.classList.remove("headerOpenBackground");
            }else{
                headerClass.classList.remove("headerScrollBackground");
                headerClass.classList.add("headerCloseBackground");
                headerClass.classList.remove("headerOpenBackground");
            };
        };
    }

    headerMenuIcon.onclick = OpenCloseMenu;

    window.addEventListener("scroll", function() {
        if (window.pageYOffset >= 30 && menuIsOpen == false) {
            headerClass.classList.add("headerScrollBackground");
            headerClass.classList.remove("headerCloseBackground");
            headerClass.classList.remove("headerOpenBackground");
        } else if(menuIsOpen == true){
            headerClass.classList.remove("headerScrollBackground");
            headerClass.classList.remove("headerCloseBackground");
            headerClass.classList.add("headerOpenBackground");
        } else if(menuIsOpen == false){
            headerClass.classList.remove("headerScrollBackground");
            headerClass.classList.add("headerCloseBackground");
            headerClass.classList.remove("headerOpenBackground");
        }
    });

    window.onresize = function( event ) {
        if(document.documentElement.clientWidth > 1024 && menuIsOpen == true){
            menuIsOpen = false;
            headerClass.classList.toggle("headerClose");
            headerClass.classList.toggle("headerOpen");
            if (window.pageYOffset >= 30) {
                headerClass.classList.add("headerScrollBackground");
                headerClass.classList.remove("headerCloseBackground");
                headerClass.classList.remove("headerOpenBackground");
            } else {
                headerClass.classList.remove("headerScrollBackground");
                headerClass.classList.add("headerCloseBackground");
                headerClass.classList.remove("headerOpenBackground");
            }
        }
    };

    //конструктор
    if (window.pageYOffset >= 30) {
        headerClass.classList.add("headerScrollBackground");
        headerClass.classList.remove("headerCloseBackground");
        headerClass.classList.remove("headerOpenBackground");
    }

    headerClass.classList.add("headerCloseBackground");
    headerClass.classList.add("headerClose");
}

header = new Header();


const swiper = new Swiper('.testimony .swiper-container', {
    speed: 400,
    spaceBetween: 100,
    navigation: {
        prevEl: '.button-prev',
        nextEl: '.button-next'
    },
    pagination: {
        el: '.testimony .indicators',
        clickable: true,
    },
    simulateTouch: false,
});