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

localStorage.setItem('token', 'sdsd');
localStorage.setItem('token1', true);
const token1 = localStorage.getItem('token1');
console.log(typeof token1);
localStorage.removeItem('token1');
localStorage.clear();