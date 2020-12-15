# Local Storage

The project is aim is to build simple Tapas menu using JS local Storage & event-Delegation with HTML and CSS

---

## User Story Dependencies

>*assigned to Rafael*

[Story Dependency Diagram](https://excalidraw.com/)

---

## WIREFRAME

![wireframe or figma]()

---

## 0.Setup

>*assigned to Krystyna*

- Write initial, basic `README`
- Create `development-strategy`
- Create project board
- Turn on GitHub Pages
- Create boilerplate `index.html`

---

## 1.Page and style

> *assigned to Krystyna*

**As a user I want to see the name of the restaurant and well styled background.**

### REPO

- This user story is developed on branch `page`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

### HTML 

- `ìndex.html`
- `div` with `wrapper` class
- Create a `h1` element for the name of the header
- Create `ul` element with `plates`class
- `form`element with `ìnputs`
- `button` element

### CSS

- `style.css`styling the elements

### Data

- `data.js` store the data for the classes 


## 2. Add items

> *assigned to Rafael*

**As a user I want to  see the button for adding item and submit it.**


### REPO

- This user story is developed on branch `add`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

### Listeners

- Create `add-items.js` listener

### Handlers

- Create `add-items.js`  handler function

---

## 3. Populate list

> *assigned to Brain*

**As a user I want to see the submitted items on the list and save it.**

### REPO

- This user story is developed on branch `list`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

### DOM

- Create `li`  with `input` box
- Create  `label`

### CSS

- Style input and label elements.

### Handlers

- Create a `populate-list.js` that displays and saves the user input

---

## 4. Toggle Done

> *assigned to Divya*

**As a user I want to remove the submitted item after checking the item and refreshing the page.**

### REPO

- This user story is developed on branch `done`
- This branch is merged to `master` branch after the acceptance criteria have been checked off

### Listeners

- Create `items-list.js` listenner

### Handlers

- Create `toggle-done.js` function 

---