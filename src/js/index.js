console.log('ddd');

const listTabs = document.querySelector('.list-tabs');
const tabItem = document.querySelectorAll('.list-tab-item');

listTabs.addEventListener('click', showItem);

function showItem(e) {
  onClickСrossHideItem(e);

  if (e.target.classList[0] === 'list-tab-item-btn') {
    tabItem.forEach(el => {
      if (el.classList[2]) {
        el.classList.remove('active-item');
        el.children[2].classList.remove('hide-tab-btn');
      }
    });
    e.target.offsetParent.classList.add('active-item');
    e.target.classList.add('hide-tab-btn');
  }
}

// eсли клик на крестик удаляем класы
function onClickСrossHideItem(event) {
  if (event.target.offsetParent.classList[2]) {
    try {
      if (event.target.previousElementSibling.nodeName === 'P') {
        event.target.offsetParent.classList.remove('active-item');

        tabItem.forEach(el => {
          el.children[2].classList.remove('hide-tab-btn');
        });
      }
    } catch {
      (' error');
    }
  }
}
