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
const addTask = document.querySelector('.add-task-form')
const addProject = document.querySelector('.add-project-form')
const inputProject = document.querySelector('.input-project')
const projectList = document.querySelector('[data-project-list]')



const LOCAL_STORAGE_PROJECT_KEY = 'task.projects'
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || []

// newTaskForm.addEventListener('submit', e => {
//     e.preventDefault()
//     const taskName = newTaskInput.value
//     if (taskName == null || taskName === '') return
//     const task = createTask(taskName)
//     newTaskInput.value = null
//     const selectedList = lists.find(list => list.id === selectedListId)
//     selectedList.tasks.push(task)
//     saveAndRender()
// })

function render() {
    projects.forEach(project => {
        dom('option', {
                id: Date.now().toString()
            },
            project,
            projectList
        )
    })
}

function tasker(theTask, date) {
    dom('div', {
        classList: 'task'
    }, theTask, entry)
    dom('div', {
        id: Date.now().toString()
    }, date, entry)
}

function projectHelper(theProject) {
    dom('option', {
            id: Date.now().toString()
        },
        theProject,
        projectList
    )
}

function clearTaskForm() {
    inputOne.value = null
    inputTwo.value = null
}

function clearProjectForm() {
    inputProject.value = null
}

const btnHandler = document.querySelectorAll("button");
btnHandler.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id == "add-task") {
            addTask.classList.toggle('show')
        }
        if (btn.id == "add-project") {
            addProject.classList.toggle('show')
        }
    });
});

addTask.addEventListener('submit', (e) => {
    e.preventDefault()
    addTask.classList.toggle('show')
    dom("div", {
        classList: "to-do-entry"
    }, null, content);
    tasker(inputOne.value, inputTwo.value)
    clearTaskForm()
})

addProject.addEventListener('submit', (e) => {
    e.preventDefault()
    addProject.classList.toggle('show')
    projects.push(projectHelper(inputProject.value))
    clearProjectForm()
    render()
})

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