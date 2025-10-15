let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    navbar.classList.toggle('active');

    if (menuIcon.textContent === 'menu') {
      menuIcon.textContent = 'close';
    } else {
      menuIcon.textContent = 'menu';
    }
  
}