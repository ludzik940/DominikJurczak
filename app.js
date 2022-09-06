'use strict'

window.addEventListener('load', (event) => {
    
    const menuItems = document.querySelectorAll('.menu--item__h2');
    const contentBox = document.querySelectorAll('.content--box');
    
    menuItems.forEach((item) => {
        item.addEventListener('click', (e) => {

            // Toogling active status on choosen menu item
            menuItems.forEach(f => f.classList.remove('active'));
            e.target.classList.toggle('active');

            // Display content depending on choosen option
            for(let i = 0; i < contentBox.length; i++) {
                if(contentBox[i].classList.contains(item.id)) {
                    contentBox[i].classList.remove('hidden');
                } else {
                    contentBox[i].classList.add('hidden');
                }
            }

        })
    })


    // Open Modal for CV downlaod

    const downloadBtn = document.querySelector('.btn--download');
    const modalWindow = document.querySelector('.modal--container');
    const closeModal = document.querySelector('.modal--close');
    const mainContent = document.querySelector('.main--content');


    downloadBtn.addEventListener('click', () => {
        modalWindow.style.display = 'block';
        mainContent.style.opacity = '0.3';
    })

    closeModal.addEventListener('click', () => {
        modalWindow.style.display = 'none';
        mainContent.style.opacity = '1';
    })

});