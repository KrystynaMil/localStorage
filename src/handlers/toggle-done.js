'use strict';

function checkedDone(event){

    if(!event.target.matches('input')) return;

    const el = event.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    addingText(items, itemsList);
}

