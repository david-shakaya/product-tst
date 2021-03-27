const formRef = document.querySelector('.calculator-form');
const calculatorPriceRef = document.querySelector('.calculator-price');

formRef.addEventListener('submit', onHandlleReturnData);

let valueColor = 'Не выбрано';
let valuSize = 'Не выбрано';

function onHandlleReturnData(e) {
    e.preventDefault();
    const color = valueColor;
    const size = valuSize;
    const number = e.target[1].value;
    const date = e.target[2].value;
    const city = e.target[3].value;
    const delivery = e.target[4].value;
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

selectColor();
