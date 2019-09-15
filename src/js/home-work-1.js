let value1 = document.querySelector('#num1');
let value2 = document.querySelector('#num2');


// document.querySelectorAll('.math').forEach(item => {
//     item.onclick = function (e) {
//        if(this.className.includes('plus')){
//            document.querySelector('.result').innerHTML = `= ${+document.querySelector('#num1').value + +document.querySelector('#num2').value}`;
//            this.setAttribute('disabled', 'disabled');
//        }
//     }
// });
const clean = () => {
    if (document.querySelectorAll('input[disabled = "disabled"]')){
        document.querySelectorAll('input[disabled = "disabled"]').forEach(item => {
            item.removeAttribute('disabled');
        });
    }

};

document.querySelectorAll('.numbers').forEach(item => {
    item.addEventListener('input', function(e) {

        clean();

        document.querySelectorAll('.math').forEach(item => {
            item.onclick = function (e) {
                console.log(this.value);
                action(this.value);

            }
        });
    });
});


function action(value) {

    switch (value) {
        case '+':
            clean();
            document.querySelector('.result').innerHTML = `= ${+document.querySelector('#num1').value + +document.querySelector('#num2').value}`;
            document.querySelector('input[value = "+"]').setAttribute('disabled','disabled');
            break;
        case '-':
            clean();
            document.querySelector('input[value = "-"]').setAttribute('disabled','disabled');
            document.querySelector('.result').innerHTML = `= ${+document.querySelector('#num1').value - +document.querySelector('#num2').value}`;
            break;
        case '*':
            clean();
            document.querySelector('input[value = "*"]').setAttribute('disabled','disabled');
            document.querySelector('.result').innerHTML = `= ${+document.querySelector('#num1').value * +document.querySelector('#num2').value}`;
            break;
        case '/':
            clean();
            document.querySelector('input[value = "/"]').setAttribute('disabled','disabled');
            document.querySelector('.result').innerHTML = `= ${+document.querySelector('#num1').value / +document.querySelector('#num2').value}`;
            break;
        default:
            alert( "Нет таких значений" );

    }
}