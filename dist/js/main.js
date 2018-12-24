const menuBtn = document.querySelector('.menu-btn');
const menuProfile = document.querySelector('.menu-profile');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.nav-item');

menuBtn.addEventListener('click', toggleMenu);

let btnToggled = false;
function toggleMenu(){
    if (!btnToggled) {
        menuBtn.classList.add('close');
        menuProfile.classList.add('show');
        menuNav.classList.add('show');
        menuItems.forEach(item => item.classList.add('show'));
        btnToggled = true;
        console.log('works!');
    } else {
        menuBtn.classList.remove('close');
        menuProfile.classList.remove('show');
        menuNav.classList.remove('show');
        menuItems.forEach(item => item.classList.remove('show'));
        btnToggled = false;
    }
}