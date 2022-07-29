const third = document.querySelectorAll('.one-third');
const noborder = document.querySelector('.no-border');

third.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.boxShadow = '-1px -1px 2px 2px #bd7c2f';
    });

    element.addEventListener('mouseout', () => {
        element.style.boxShadow = 'none';
    });
});
