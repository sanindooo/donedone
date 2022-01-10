const mobileBtn = document.querySelector('#mobileBtn');
const nav = document.querySelector('#nav');
const navBtns = document.querySelectorAll('.navBtn');
const siteHeader = document.querySelector('.siteHeader');

if (mobileBtn) {

    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        nav.classList.toggle('active');
        siteHeader.classList.toggle('active');
    });

    for (let i = 0; i < navBtns.length; i++) {

        navBtns[i].addEventListener('click', () => {
            navBtns[i].classList.toggle('active');
            navBtns[i].parentElement.classList.toggle('active');
        })
    }
}
