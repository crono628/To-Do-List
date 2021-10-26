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
const dataDeleteProjectBtn = document.querySelectorAll("[data-delete-project]");

let ls = require("local-storage");
let projects = JSON.parse(ls("todo.projects")) || []
let currentProjectId = JSON.parse(ls("todo.currentProjectId"))


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
    clearLists(projectList);
    clearTasks();
    renderProjects();
    closeForms();
}

function renderProjects() {
    clearLists(projectList);
    projects.forEach((project) => {
        let obj = dom(
            "div", {
                classList: project.classList,
                id: project.id
            },
            project.name,
            projectList
        );
        obj.dataset.arrayIndex = getIndex(project);
        obj.addEventListener("click", (e) => {
            currentProjectId = e.target.id;
            projectList.childNodes.forEach((child) => {
                child.classList.remove("active");
            });
            obj.classList.add("active");
            clearTasks();
            renderTasks();
        });
    });
}

function renderTasks() {
    if (currentProjectId) {
        clearTasks();
        let theThing = findCurrentProject(projects);
        theThing.tasks.forEach((listItem) => {
            let task = dom(
                "div", {
                    classList: listItem.classList,
                    id: currentProjectId
                },
                listItem.name,
                taskList
            );
            dom(
                "div", {
                    classList: listItem.classList,
                    id: currentProjectId
                },
                listItem.dueDate,
                dueByList
            );
            dom(
                "div", {
                    classList: listItem.classList,
                    id: currentProjectId
                },
                listItem.complete,
                checkboxList
            );
            task.dataset.arrayIndex = getIndex(theThing);
            task.addEventListener("click", (e) => {
                task.classList.toggle("complete");
            });
        });
    }
}

function save() {
    ls("todo.projects", JSON.stringify(projects))
    ls("todo.currentProjectId", JSON.stringify(currentProjectId))
}

function renderAndSave() {
    render();
    save();
}

function newProjectRender() {
    let list = document.getElementsByClassName("project-name");
    for (let i = 0; i < projects.length - 1; i++) {
        list[i].classList.remove("active");
    }
}

function deleteButtonRender() {
    let list = document.getElementsByClassName("project-name");
    for (let i = 0; i < projects.length; i++) {
        list[i].classList.remove("active");
    }
}

function clearLists(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function clearTasks() {
    clearLists(dueByList);
    clearLists(taskList);
    clearLists(checkboxList);
}

function closeForms() {
    dataForms.forEach((form) => {
        form.classList.add("hide");
    });
}

function findCurrentProject(arr) {
    let finder = arr.find((item) => item.id === currentProjectId);
    return finder;
}

function getIndex(thing) {
    return projects.indexOf(thing);
}

headerButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        dataForms.forEach((form) => {
            form.classList.add("hide");
        });
        if (btn.dataset.headerBtn == "project") {
            document.querySelector(".add-project-form").classList.remove("hide");
        }
        if (btn.dataset.headerBtn == "task") {
            document.querySelector(".add-task-form").classList.remove("hide");
        }
    });
});

dataSubmitFormBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (btn.dataset.formSubmit == "project") {
            if (dataProjectInput.value === null || dataProjectInput === " ") {
                return;
            } else {
                let newObj = new Project(dataProjectInput.value);
                projects.push(newObj);
                currentProjectId = newObj.id;
                dataProjectInput.value = null;
                renderAndSave();
                newProjectRender();
            }
        }
        if (btn.dataset.formSubmit == "task") {
            if (dataTaskInput.value === null || dataTaskInput === " ") {
                return;
            } else {
                let newObj = new Task(dataTaskInput.value, dataDateInput.value);
                let currentProject = findCurrentProject(projects);
                currentProject.tasks.push(newObj);
                newObj.id = currentProjectId;
                dataTaskInput.value = null;
                dataDateInput.value = null;
                renderTasks();
                save();
            }
        }
    });
});

dataCancelFormBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        closeForms();
    });
});

dataDeleteProjectBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.dataset.deleteProject == "first-check") {
            document.querySelector(".confirm-delete").classList.toggle("hide");
        }
        if (btn.dataset.deleteProject == "confirm") {
            let index = getIndex(findCurrentProject(projects));
            document.querySelector(".confirm-delete").classList.toggle("hide");
            projects.splice(index, 1);
            renderAndSave();
            deleteButtonRender();
        }
    });
});

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.id = Date.now().toString();
        this.classList = "project-name active";
    }
}

class Task {
    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
        this.complete = false;
        this.classList = "task-name";
    }
}

renderAndSave();