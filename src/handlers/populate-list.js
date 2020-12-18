
// A handler that grab the users input and store in the data in platesList items

"use strict";
/* Get Elements (with querySelector)*/

/* Write the function*/

function addingText(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
          <label for="item${i}">${plate.value}</label>
        </li>
      `;
    })
    .join("");
}

addingText(items, itemsList);
