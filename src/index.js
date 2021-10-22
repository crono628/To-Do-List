const headerButton = document.querySelectorAll('[data-header-btn]')
const projectList = document.querySelector('[data-project-list]')
const taskList = document.querySelector('[data-task-list]')
const dueByList = document.querySelector('[data-due-by-list]')
const addTaskForm = document.querySelector('[data-add-task-form]')
const addProjectForm = document.querySelector("[data-add-project-form]")
const dataTaskInput = document.querySelector('[data-task-input]')
const dataDateInput = document.querySelector('[data-date-input]')
const dataProjectInput = document.querySelector('[data-project-input]')
const dataPriorityInput = document.querySelector('[data-priority-input]')

let projects = ['Clean', 'Work', 'Weekend', 'Dinner']

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

function classOn(elem, classList) {
    elem.classList.add(classList)
}

function classOff(elem, classList) {
    elem.classList.add(classList)
}

function render() {
    clearElement(projectList)
    projects.forEach(item => {
        dom('li', {
            classList: 'project-name',
            id: item.id
        }, item.name, projectList)
    })
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

class Project {
    constructor(name) {
        this.name = name
        this.tasks = []
        this.id = Date.now()
        this.classList = 'project-name'
    }
}

render()