const formRef = document.querySelector('.calculator-form');
const calculatorPriceRef = document.querySelector('.calculator-price');

formRef.addEventListener('submit', onHandlleReturnData);

let valueDiv = 'Не выбрано';

function onHandlleReturnData(e) {
    e.preventDefault();
    const color = valueDiv;
    const size = e.target[0].value;
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

let select = function () {
    let selectHeader = document.querySelectorAll('.select-header');
    let selectItem = document.querySelectorAll('.select-item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select-color'),
            currentText = select.querySelector('.select-current');
        currentText.innerText = text;
        valueDiv = text;
        select.classList.remove('is-active');
    }
};

select();
