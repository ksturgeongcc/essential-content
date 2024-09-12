function Nav () {
    let mobileClick = document.getElementById('mobile_click');
    let mobileNav = document.querySelector('#mobile_nav');

    mobileClick.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });
}
Nav()