
let body = document.getElementsByTagName("body")[0];

function new_role() {
    let name = prompt("Role name?");

    let paragraph = document.createElement("p");
    paragraph.textContent = name;

    body.appendChild(paragraph);
}