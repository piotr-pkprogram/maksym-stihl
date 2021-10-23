export default {
    openClosePhoneMenu(state) {
        const phoneMenu = document.querySelector('.phone-menu');
        const burgerBtnElements = document.querySelectorAll('.phone-header__btn-element');

        if (state.isPhoneMenuOpen && document.body.offsetWidth < 768) {
            phoneMenu.classList.remove("animate-openPhoneMenu");
            phoneMenu.classList.add("animate-closePhoneMenu");

            burgerBtnElements[0].classList.add("animate-unAnimateBurgerElement1");
            burgerBtnElements[0].classList.remove("animate-burgerElement1");

            burgerBtnElements[2].classList.add("animate-unAnimateBurgerElement3");
            burgerBtnElements[2].classList.remove("animate-burgerElement3");

            setTimeout(() => {
                burgerBtnElements[1].classList.add("opacity-1");
                burgerBtnElements[1].classList.remove("opacity-0");
            }, 125);

            setTimeout(() => {
                phoneMenu.classList.remove("block");
            }, 500);
            state.isPhoneMenuOpen = false;
        } else if (document.body.offsetWidth < 768) {
            phoneMenu.classList.remove("animate-closePhoneMenu");
            phoneMenu.classList.add("block");
            phoneMenu.classList.add("animate-openPhoneMenu");

            burgerBtnElements[0].classList.add("animate-burgerElement1");
            burgerBtnElements[0].classList.remove("animate-unAnimateBurgerElement1");

            burgerBtnElements[2].classList.add("animate-burgerElement3");
            burgerBtnElements[2].classList.remove("animate-unAnimateBurgerElement3");

            setTimeout(() => {
                burgerBtnElements[1].classList.add("opacity-0");
                burgerBtnElements[1].classList.remove("opacity-1");
            }, 125);

            state.isPhoneMenuOpen = true;
        }
    },
    setLocalStorage(_, item) {
        localStorage.setItem(item.name, item.value);
    },
    appearHiddenLoader(_, switchLoader) {
        const loader = document.querySelector('.loading');
        const main = document.querySelector('main');

        if (switchLoader) {
            loader.classList.remove("animate-hidden");
            loader.classList.add("grid");
            main.classList.remove("overflow-visible", "h-auto");
        } else {
            loader.classList.add("animate-hidden");
            loader.classList.remove("grid");
            main.classList.add("overflow-visible", "h-auto")
        }
    }
}