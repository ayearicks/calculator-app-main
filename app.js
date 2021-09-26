document.addEventListener('DOMContentLoaded', () => {
    let calculator = Array.from(document.querySelectorAll('.btn'));
    let display = document.getElementById("number-result");
    let toggle = document.querySelectorAll("input[type=checkbox]");

    calculator.map(number => {
        number.addEventListener('click', (ev) => {
            switch(ev.target.innerText) {

                case 'RESET':
                    display.innerText = ' ';
                    break;
                case 'DEL':
                    display.innerText = display.innerText.slice(0, -1);
                    break;
                case 'x':
                    display.innerText = display.innerText + '*'
                    break;
                case '=':
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = 'Invalid';
                    }
                    break;

                default: display.innerText += ev.target.innerText;
            }
        })
    });

    toggle.addEventListener("click", (num) => {

    })


});