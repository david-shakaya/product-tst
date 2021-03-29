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
let valueCity = 'Не выбрано';
let valueDelivery = 'Не выбрано';
let price = 54.13 + '$';
let priceDom = () => {
    let q = price.slice(0, -1);
    return Number(q).toFixed(2) + '$';
};

function onHandlleReturnData(e) {
    e.preventDefault();
    const color = valueColor;
    const size = valueSize;
    const number = e.target[0].value;
    const date = e.target[1].value;
    const city = valueCity;
    const delivery = valueDelivery;
    const price = calculatorPriceRef.textContent;

    console.log(`Цвет товара --- ${color}, 
    Размер --- ${size}
    Количество --- ${number}
    Дата доставки --- ${date}, 
    Город доставки --- ${city},
    Почта --- ${delivery}
    Общая цена --- ${price}`);
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

let selectCity = function () {
    let selectHeader = document.querySelector('.select-header-city');
    let selectItem = document.querySelectorAll('.select-item-city');

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
        const currentTextColor = select.querySelector('.select-current-city');
        currentTextColor.innerText = this.innerText;
        valueCity = this.innerText;

        const newPrice = +price.slice(0, -1);
        switch (this.innerText) {
            case 'Kyiv':
                price = `${+newPrice + 16.23}$`;
                break;
            case 'Odessa':
                price = `${+newPrice + 12.03}$`;
                break;
            case 'Rivne':
                price = `${+newPrice + 22.37}$`;
                break;
            case 'Lviv':
                price = `${+newPrice + 44.33}$`;
                break;
        }
        formRef.children[6].textContent = priceDom();
        select.classList.remove('is-active');
        this.parentElement.parentElement.children[0].classList.remove('active');
    }
};

let selectDelivery = function () {
    let selectHeader = document.querySelector('.select-header-delivery');
    let selectItem = document.querySelectorAll('.select-item-delivery');

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
        const currentTextColor = select.querySelector(
            '.select-current-delivery',
        );
        currentTextColor.innerText = this.innerText;
        valueDelivery = this.innerText;

        select.classList.remove('is-active');
        this.parentElement.parentElement.children[0].classList.remove('active');
    }
};

// Input typr Bumbert Logik
inputControlPlusRef.addEventListener('click', plusValueInput);
inputControlMinusRef.addEventListener('click', minusValueInput);

function plusValueInput() {
    const newPrice = price.slice(0, -1);

    let inputValue = Number(formRef[0].value);
    inputValue += 1;
    price = `${+newPrice * 2}$`;

    formRef[0].value = inputValue;
    formRef.children[6].textContent = priceDom();
}
function minusValueInput() {
    let inputValue = Number(formRef[0].value);
    inputValue -= 1;
    formRef[0].value = inputValue;

    //
    const newPrice = price.slice(0, -1);
    price = `${+newPrice / 2}$`;
    formRef.children[6].textContent = priceDom();
}

selectColor();
selectSize();
selectCity();
selectDelivery();

function setDateNowInput() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return (formRef[1].value = today);
}
setDateNowInput();

//Для изменения  прайся

console.dir(formRef.children[7]);
console.dir((formRef.children[6].textContent = price));
