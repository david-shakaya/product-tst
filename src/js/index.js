const formRef = document.querySelector('.calculator-form');
const calculatorPriceRef = document.querySelector('.calculator-price');

formRef.addEventListener('submit', onHandlleReturnData);

function onHandlleReturnData(e) {
    e.preventDefault();
    const color = e.target[0].value;
    const size = e.target[1].value;
    const number = e.target[2].value;
    const date = e.target[3].value;
    const city = e.target[4].value;
    const delivery = e.target[5].value;
    const price = calculatorPriceRef.textContent;

    console.log(`Цвет товара --- ${color}, 
    Размер --- ${size}
    Количество --- ${number}
    Дата доставки --- ${date}, 
    Город доставки --- ${city},
    Почта --- ${delivery}
    Общая цена --- ${price}$`);
}
