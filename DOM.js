const panelText = document.querySelector('.panel').innerText;
console.log(panelText);
document.querySelector('.panel').innerText = 'New text';
console.log(document.querySelector('.panel').innerText);
// document.querySelector('.input').value = 'Text';

// document.querySelector('.button').addEventListener('click', function() {
//     const input = document.querySelector('.input').value;
//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// })

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    // document.querySelector('.notification').classList.remove('notification_hidden');
    console.log(document.querySelector('.notification').getAttribute('class'));
    document.querySelector('.notification').setAttribute('class', 'notification');
}

// document.querySelector('.input').addEventListener('keydown', (e) => {
//     if(e.code === 'Enter') {
//         submitForm();
//     } 
// })

function inputChanged(e) {
    if(e.code == 'Enter') {
        submitForm();
    } 
}

const panelText2 = 'Панель';
const panelClass = 'button';
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
newElement.innerHTML = `<button class='${panelClass}'>${panelText2}</button>`;
document.querySelector('.test').appendChild(newElement);