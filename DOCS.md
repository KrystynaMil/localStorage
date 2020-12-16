<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [add-items.js](#srchandlersadd-itemsjs)
- [listeners](#listeners)
  - [add-items.js](#srclistenersadd-itemsjs)
- [logic](#logic)
- [data.js](#srcdatajs)
- [init.js](#srcinitjs)

<!-- END TOC -->

<!-- BEGIN DOCS -->

---

# Handlers

Handler function define user interactions. They will:

- read user input from events and from the DOM
- read and modify program data variables
- process user data with logic functions
- update the DOM to show changes to the user
- log any important information for developers

---

### [./src/handlers/add-items.js](./src/handlers/add-items.js?study)

[TOP](#DOCS)

---

---

# Listeners

Event listeners are used to connect handler functions to user interactions with the DOM.

You can use the same handler in many different listeners, or add more than one listeners to the same DOM element.

---

### [./src/listeners/add-items.js](./src/listeners/add-items.js?study)

[TOP](#DOCS)

---

---

# Logic

Logic functions are pure functions. They take primitives, objects or arrays as arguments and they return primitives, objects or arrays. Handlers will use logic functions to transform user input.

Logic functions will _never_ ...

- read from the DOM
- write to the DOM
- use events
- use prompt/alert/confirm
- use variables that are not parameters
- use variables that are not declared locally

[TOP](#DOCS)

---

---

## [./src/data.js](./src/data.js?study)

<a name="addItems"></a>

## addItems

data that is saved and used between user interactions

---

## [./src/init.js](./src/init.js?study)

<!-- END DOCS -->
