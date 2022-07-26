// script to display menu on mobile when the menu icon is clicked

var pContainer = document.getElementById("menu-icon");
var menu = document.getElementById('mobile-menu');

// menu.style.display = 'none'

// show varibale keeps toggling between true and false
//  when true, we show the menu otherwise false
//  !show is used to alternate the value of true
var show = true;

function toggleMenu() {
    if (show) {
        menu.style.display = 'block'
        menu.classList.add('slideIn')
        menu.classList.remove('slideOut')
        pContainer.innerHTML = '<i class="fa fa-solid fa-close"></i>'
    }
    else {

        menu.classList.remove('slideIn')
        menu.classList.add('slideOut')
        pContainer.innerHTML = '<i class="fa fa-solid fa-bars"></i>'
    }
}
function manageToggle() {
    toggleMenu()
    show = !show;
}
// set event handler
pContainer.onclick = manageToggle;


