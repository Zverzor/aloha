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
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
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
    const menuIcon = document.querySelector(".icon-menu");
    const mobileMenu = document.querySelector(".mobilemenu");
    menuIcon.addEventListener("click", (function(e) {
        menuIcon.classList.toggle("open");
        mobileMenu.classList.toggle("open");
        document.querySelector(".mobilemenu-header__phone").classList.toggle("hide");
        document.querySelector(".mobilemenu-header__inst").classList.toggle("hide");
        document.querySelector(".mobilemenu-header__facebook").classList.toggle("hide");
        document.querySelector(".mobilemenu-header__search").classList.toggle("hide");
        document.querySelector(".mobilemenu-header__phone-block").classList.toggle("show");
    }));
    let menuArrows = document.querySelectorAll(".menu__arrow");
    if (menuArrows.length > 0) for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", (function(e) {
            menuArrow.parentElement.classList.toggle("_active");
        }));
    }
    const search = document.querySelector(".menu__search");
    const menu = document.querySelector(".menu__list");
    const searchInput = document.querySelector(".menu__input");
    const searchExit = document.querySelector(".search__exit");
    search.addEventListener("click", (function(e) {
        search.classList.add("active");
        if (search.classList.contains("active")) {
            menu.classList.add("hide");
            searchInput.classList.remove("hide");
            searchExit.classList.add("active");
        }
    }));
    if (searchExit) searchExit.addEventListener("click", (function(e) {
        menu.classList.remove("hide");
        searchInput.classList.add("hide");
        searchExit.classList.remove("active");
    }));
    const searchMobile = document.querySelector(".mobilemenu-header__search");
    const searchMobileInput = document.querySelector(".mobilemenu__input");
    searchMobile.addEventListener("click", (function(e) {
        searchMobile.classList.toggle("show");
        if (searchMobile.classList.contains("show")) {
            document.querySelector(".mobilemenu-header__phone").classList.add("hide");
            document.querySelector(".mobilemenu-header__inst").classList.add("hide");
            document.querySelector(".mobilemenu-header__facebook").classList.add("hide");
            searchMobileInput.classList.add("show");
        } else {
            document.querySelector(".mobilemenu-header__phone").classList.remove("hide");
            document.querySelector(".mobilemenu-header__inst").classList.remove("hide");
            document.querySelector(".mobilemenu-header__facebook").classList.remove("hide");
            searchMobileInput.classList.remove("show");
        }
    }));
    window["FLS"] = true;
    isWebp();
    menuInit();
})();