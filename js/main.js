window.addEventListener('scroll', function () {
    var navbar = document.querySelector('#header');
if (window.scrollY > 60) {
        navbar.classList.add("navbar_scrolled");
    } else {
        navbar.classList.remove("navbar_scrolled");
    }
});

window.addEventListener('scroll', function () {
    var logo = document.querySelector('#logo');
if (window.scrollY > 60) {
        logo.classList.add("logo_invert");
    } else {
        logo.classList.remove("logo_invert");
    }
});


window.addEventListener('scroll', function () {
    var menu_btn = document.querySelector('#menu_btn');
if (window.scrollY > 60) {
        menu_btn.classList.add("menu_btn_invert");
    } else {
        menu_btn.classList.remove("menu_btn_invert");
    }
});


    var menu_btn = document.querySelector('#menu_btn');
    var menu = document.querySelector('#menu');
    var menu_btn_close = document.querySelector('#menu_btn_close');
    menu_btn.addEventListener('click', function () {
        // menu_btn.classList.toggle('show_menu');
        menu.classList.toggle('show_menu');
    });

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('menu_btn_active');
    });

    menu_btn_close.addEventListener('click', function () {
        menu.classList.toggle('show_menu');
        menu_btn.classList.toggle('menu_btn_active');
    });