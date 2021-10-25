import './styles/style.css';

const headerButton = document.querySelectorAll("[data-header-btn]");
const projectList = document.querySelector("[data-project-list]");
const taskList = document.querySelector("[data-task-list]");
const dueByList = document.querySelector("[data-due-by-list]");
const checkboxList = document.querySelector("[data-checkbox-list]");
const dataForms = document.querySelectorAll("[data-form]");
const dataSubmitFormBtn = document.querySelectorAll("[data-form-submit]");
const dataCancelFormBtn = document.querySelectorAll("[data-form-cancel]");
const dataTaskInput = document.querySelector("[data-task-input]");
const dataDateInput = document.querySelector("[data-date-input]");
const dataProjectInput = document.querySelector("[data-project-input]");
const dataDeleteProjectBtn = document.querySelectorAll("[data-delete-project]")
const dataProjectIdentification = document.querySelectorAll("[data-project-id]")
let projectDiv = projectList.childNodes

let ls = require("local-storage")
let projects = JSON.parse(ls("todo.projects")) || []
let currentProjectId

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

function render() {
    clearLists(projectList)
    projects.forEach(project => {
        thing = dom('div', {
            classList: project.classList,
            id: project.id
        }, project.name, projectList)
        thing.dataset.projectId = project.id
    });
    closeForms()
}

function save() {
    ls("todo.projects", JSON.stringify(projects))
}

function renderAndSave() {
    render()
    save()
}

function clearLists(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

function closeForms() {
    dataForms.forEach(form => {
        form.classList.add('hide')
    })
}

function findCurrentProject(list) {
    list.find(item => item.id == currentProjectId)
    return list
}

headerButton.forEach(btn => {
    btn.addEventListener('click', () => {
        dataForms.forEach(form => {
            form.classList.add('hide')
        })
        if (btn.dataset.headerBtn == "project") {
            document.querySelector('.add-project-form').classList.remove('hide')
        }
    })
})

dataSubmitFormBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        if (btn.dataset.formSubmit == "project") {
            if (dataProjectInput.value == null || dataProjectInput == '') {
                return
            } else {
                let newObj = new Project(dataProjectInput.value)
                projects.push(newObj)
                currentProjectId = newObj.id
                dataProjectInput.value = null
                renderAndSave()
            }
        }
        if (btn.dataset.formSubmit == "task") {
            let newObj = new Task(dataTaskInput.value, dataDateInput.value)

        }
    })
})

dataCancelFormBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        closeForms()
    })
})

projectDiv.forEach(div => {
    div.addEventListener("click", (e) => {
        console.log('click')
    })
})

console.log(projectDiv);

class Project {
    constructor(name) {
        this.name = name
        this.tasks = [];
        this.id = Date.now().toString();
        this.classList = "project-name";
    }
}

class Task {
    constructor(name, dueDate) {
        this.name = name
        this.dueDate = dueDate
        this.complete = false
        this.classList = "task-name"
    }
}

renderAndSave()