document.addEventListener('DOMContentLoaded', function() {
    let input = document.getElementById('input');
    let buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML == '=') {
                input.value = eval(input.value);
            } else if (e.target.innerHTML == 'AC') {
                input.value = '';
            } else if (e.target.innerHTML == 'DEL') {
                input.value = input.value.slice(0, -1);
            } else {
                input.value += e.target.innerHTML;
            }
        });
    });
});