'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    console.log('Button Clicked');
    // remove hidden class, thus showcasing the modal window
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

const closeModal = function() {
    // add the class back on
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// click x 
btnCloseModal.addEventListener('click', closeModal);
// click outside box
overlay.addEventListener('click', closeModal);

// listen for events everywhere, no matter where they happen on the page
// close page when only esc was pressed 
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
