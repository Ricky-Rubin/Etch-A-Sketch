const container = document.querySelector('#container');
const button = document.querySelector('#btn');

function populateDiv() {
    let question = prompt('Enter your preferred grid size? Input only one of the numbers.');

    let length = 500;
    let divNo = question * question;
    let spaces = 2 * question;
    let newLength = length - spaces;
    let divLength = newLength / question;

    for (let divs = 0; divs < divNo; divs++) {
        const square = document.createElement('div');
        square.style.cssText = `width: ${divLength}px; height: ${divLength}px; border: 1px solid black;`;
        container.appendChild(square);

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
    }
}

button.addEventListener('click', populateDiv);