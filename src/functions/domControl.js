function dom(element, attributes = {}, text, parent) {
    const elem = document.createElement(element);
    if (attributes) {
        Object.assign(elem, attributes);
    };
    if (text) {
        elem.innerText = text;
    };
    if (parent) {
        parent.appendChild(elem)
    }
    return elem
}