let paint = 'black';

const container = document.querySelector('#container');
const button = document.querySelector('#btn');
const clearBtn = document.querySelector('#clear');
const blackBtn = document.querySelector('#default');
const redBtn = document.querySelector('#red');
const greenBtn = document.querySelector('#green');

function populateDiv() {
    let question = prompt('Enter the number of squares you want per side.');

    let length = 350;
    let divNo = question * question;
    let spaces = 2 * question;
    let newLength = length - spaces;
    let divLength = newLength / question;

    for (let divs = 0; divs < divNo; divs++) {
        const square = document.createElement('div');
        square.style.cssText = `width: ${divLength}px; height: ${divLength}px; border: 1px solid lightgrey; background-color: white;`;
        container.appendChild(square);

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = `${paint}`;
        })
    }

    if (question < 2 || question > 100) {
        alert('Enter a value greater than 2 and not more than 100!');
        container.innerHTML = '';
    }
}

button.addEventListener('click', () => {
    container.innerHTML = '';
    populateDiv();
});

clearBtn.addEventListener('click', () => {
    container.innerHTML = '';
})

blackBtn.addEventListener('click', () => {
    paint = 'black';
});

redBtn.addEventListener('click', () => {
    paint = 'red';
});

greenBtn.addEventListener('click', () => {
    paint = 'green';
});