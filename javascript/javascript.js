let navBar = document.getElementById('nav-bar');
let subMenu = document.getElementsByClassName('sub-menus');

window.onscroll = () => {  
    if (window.scrollY > 10) {
        navBar.classList.add('nav-white');
        for (const item of subMenu) {
            item.classList.add('nav-white');
          }
    } else {
        navBar.classList.remove('nav-white');
        for (const item of subMenu) {
            item.classList.remove('nav-white');
          }
    }
};
