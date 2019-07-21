const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    const input = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]');
    for (let index = 0; index < input.length; index++) {
        if(input[index].value.trim() == '') {
            event.preventDefault();
            input[index].classList.add('error_input');
        } else {
            input[index].classList.remove('error_input');
        }
    }
});