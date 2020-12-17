import { toggleDone } from '../handlers/toggle-done.js';
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);