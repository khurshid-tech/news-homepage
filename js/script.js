let menuIcon = document.getElementsByClassName('menu-icon')[0];
let menuCloseIcon = document.getElementsByClassName('close-icon')[0];
let menubarContainer = document.getElementsByClassName('menubar-container')[0];

menuIcon.addEventListener('click', function() {
    menubarContainer.classList.add('sidebar-visible');
})

menuCloseIcon.addEventListener('click', function() {
    menubarContainer.classList.remove('sidebar-visible');
})