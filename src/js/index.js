const formRef = document.querySelector('.calculator-form');
const calculatorPriceRef = document.querySelector('.calculator-price');
const inputControlPlusRef = document.querySelector(
    '.calculator-input-control-plus',
);
const inputControlMinusRef = document.querySelector(
    '.calculator-input-control-minus',
);

formRef.addEventListener('submit', onHandlleReturnData);

let valueColor = 'Не выбрано';
let valueSize = 'Не выбрано';

function onHandlleReturnData(e) {
    e.preventDefault();
    const color = valueColor;
    const size = valueSize;
    const number = e.target[0].value;
    const date = e.target[1].value;
    const city = e.target[2].value;
    const delivery = e.target[3].value;
    const price = calculatorPriceRef.textContent;

    console.log(`Цвет товара --- ${color}, 
    Размер --- ${size}
    Количество --- ${number}
    Дата доставки --- ${date}, 
    Город доставки --- ${city},
    Почта --- ${delivery}
    Общая цена --- ${price}$`);
}

let selectColor = function () {
    let selectHeader = document.querySelector('.select-header-color');
    let selectItem = document.querySelectorAll('.select-item-color');

    selectHeader.addEventListener('click', selectToggle);

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
        this.classList.toggle('active');
    }

    function selectChoose() {
        const select = this.closest('.select-color');
        const currentTextColor = select.querySelector('.select-current-color');
        currentTextColor.innerText = this.innerText;
        valueColor = this.innerText;

        select.classList.remove('is-active');
        this.parentElement.parentElement.children[0].classList.remove('active');
    }
};

let selectSize = function () {
    let selectHeader = document.querySelector('.select-header-size');
    let selectItem = document.querySelectorAll('.select-item-size');

    selectHeader.addEventListener('click', selectToggle);

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
        this.classList.toggle('active');
    }

    function selectChoose() {
        const select = this.closest('.select');
        const currentTextColor = select.querySelector('.select-current-size');
        currentTextColor.innerText = this.innerText;
        valueSize = this.innerText;

        select.classList.remove('is-active');
        this.parentElement.parentElement.children[0].classList.remove('active');
    }
};

// Input typr Bumbert Logik
inputControlPlusRef.addEventListener('click', plusValueInput);
inputControlMinusRef.addEventListener('click', minusValueInput);

function plusValueInput() {
    let inputValue = Number(formRef[0].value);
    inputValue += 1;
    formRef[0].value = inputValue;
}
function minusValueInput() {
    let inputValue = Number(formRef[0].value);
    inputValue -= 1;
    formRef[0].value = inputValue;
}

selectColor();
selectSize();

function setDateNowInput() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return (formRef[1].value = today);
}
setDateNowInput();
