const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () =>{
    spinnerWrapperEl.style.opacity = '10';

    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 1000);
})


