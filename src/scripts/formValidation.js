const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelectorAll('input');
    const n = input.length;
    for (let index = 0; index < n; index++) {
        if(input[index].value.trim() === '') {
            input[index].classList.add('error__input');
        } else {
            input[index].classList.remove('error__input');
        }
    }
});