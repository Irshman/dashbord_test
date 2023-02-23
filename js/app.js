(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const menuBtn = document.querySelector(".menu__burger");
    const sidebar = document.querySelector(".sidebar");
    const paginationBtns = document.querySelectorAll(".footer__btn");
    const menuItems = document.querySelectorAll(".sidebar__item");
    menuBtn.addEventListener("click", (() => {
        menuBtn.classList.toggle("menu__burger--active");
        sidebar.classList.toggle("sidebar--active");
    }));
    paginationBtns.forEach((elem => {
        elem.addEventListener("click", (function() {
            paginationBtns.forEach((el => el.classList.remove("footer__btn--active")));
            this.classList.add("footer__btn--active");
        }));
    }));
    menuItems.forEach((elem => {
        elem.addEventListener("click", (function() {
            menuItems.forEach((el => el.classList.remove("sidebar__item--active")));
            this.classList.add("sidebar__item--active");
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();