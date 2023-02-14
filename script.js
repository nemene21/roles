
let body = document.getElementsByTagName("body")[0];
let roles = [];

function new_role() {
    let name = prompt("Ime uloge?", "Nevin");
    if (name == null) return

    let number = prompt("Količina?", "1");
    if (number == null) return

    let paragraph = document.createElement("p");
    paragraph.textContent = name + ": " + number;
    paragraph.classList.add("role-text");

    for (let i = 0; i < Number(number); i++) {
        roles.push(name);
    }

    body.appendChild(paragraph);
}

function choose_roles() {
    roles.sort(() => Math.random() - 0.5);

    for (let i = 0; i < roles.length; i++) {
        alert("Ti si " + roles[i] + "!");

        if (i == roles.length - 1) {
            alert("Gotovo...");
        } else {
            alert("Dalje...");
        }
    }
}