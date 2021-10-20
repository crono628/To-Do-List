import './styles/style.css'

function dom(element, attributes = {}, text, parent) {
    const elem = document.createElement(element);
    if (attributes) {
        Object.assign(elem, attributes);
    }
    if (text) {
        elem.innerText = text;
    }
    if (parent) {
        parent.appendChild(elem);
    }
    return elem;
}

const entry = document.querySelector('.to-do-entry')
const inputOne = document.querySelector('#input-one')
const inputTwo = document.querySelector('#input-two')
const content = document.querySelector(".content");
const addForm = document.querySelector('.add-task-form')

function tasker(theTask, date) {
    dom('div', {
        classList: 'task'
    }, theTask, entry)
    dom('div', {
        classList: 'date'
    }, date, entry)
}

function clear() {
    inputOne.value = ''
    inputTwo.value = ''
}

const btnHandler = document.querySelectorAll("button");
btnHandler.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id == "add-task") {
            addForm.classList.toggle('show')
        }
        if (btn.id == "add-task-submit") {
            addForm.classList.toggle('show')
            dom("div", {
                classList: "to-do-entry"
            }, null, content);
            tasker(inputOne.value, inputTwo.value)
            clear()
        }
    });
});

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
}

class Task {
    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate
    }
}