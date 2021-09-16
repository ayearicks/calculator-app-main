// On document load, before other resources
document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelectorAll('.btn');
    const reset = document.querySelector('#reset');
    const erase = document.getElementById("del");

    // Number display
    const output = document.getElementById('number-result');

    // Add click events to all buttons
    for (let i = 0; i < btn.length; i++) {

        btn[i].addEventListener('click', function() {
            if (btn[i] === '+') {

            } else if (btn[i] === '-') {

            } else if (btn[i] === '/') {

            } else if (btn[i] === 'x') {

            } else if (btn[i] === '.') {

            } else if (btn[i] === 'del') {

            } else if (btn[i] === 'reset') {
                
            } else if (btn[i] === '=') {

            }
        })


    //     if (btn[i].innerHTML === '+') {
    //         btn[i].addEventListener('click', addition )

    //     } else if (btn[i].innerHTML === '*') {

    //     } else if (btn[i].innerHTML === '/') {

    //     } else if (btn[i].innerHTML === '-') {

    //     }
    //    if (btn[i].innerHTML === '=') {
    //         btn[i].addEventListener('click', calculate(holder))
    //     } else if (btn[i].innerHTML === "+")
    //     {
    //     } else {
    //         btn[i].addEventListener('click', holder); 
    //     }
    }
    const calculate = () => {

        
    }
    
    // Delete one number at a time
    const erase = () => {
        output.textContent = output.textContent.substring(0, output.textContent.length - 1);
    }

    // Delete all waiting numbers
    const clear = () => {
        output.textContent = '';
    }

    // const reset = document.querySelector('#reset');
    // const output = document.querySelector("#number-result");
    // const expression = {
    //     display: '0',
    //     firstInput: null,
    //     secondInputEntered: false,
    //     secondInput: null,
    //     operator: null
    // }
    // const updateDisplay = () => {
    //     output.appendChild(expression.display);
    //     console.log(expression.display)
    // }

    // updateDisplay()


    
    
    

}

    

    






























});