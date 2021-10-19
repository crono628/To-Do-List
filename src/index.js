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

const content = document.querySelector(".content");

const btnHandler = document.querySelectorAll("button");
btnHandler.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id == "add-task") {
            dom("div", {
                classList: "to-do-entry"
            }, null, content);
        } else return;
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


const project = new Project('clean car')
const task = new Task('vacuum', 'Nov 1')
task.dueDate = 'oct 30'

console.log(task);