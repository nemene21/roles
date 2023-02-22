
let body = document.getElementsByTagName("body")[0];
let roles = [];

let paragraph_id_on = 0

function new_role() {
    let isPool = !confirm("Skup?");
    if (isPool == null) return

    if (isPool) {
        let name = prompt("Ime uloge?", "Seljak");
        if (name == null) return

        let number = prompt("Količina?", "1");
        if (number == null) return

        let paragraph = document.createElement("p");
        paragraph.textContent = name + ": " + number;
        paragraph.classList.add("role-text");

        let button = document.createElement("button");
        button.textContent = "×";
        button.classList.add("add_button");
        button.onclick = function() { destroy(toString(paragraph_id_on)) };
        paragraph.appendChild(button);

        paragraph.setAttribute("id", paragraph_id_on);

        for (let i = 0; i < Number(number); i++) {
            roles.push(name);
        }

        body.appendChild(paragraph);

    } else {

        let n = prompt("Broj uloga?", "2");
        if (n == null) return

        let names = "";

        for (i = 0; i < Number(n); i++) {
            let name = prompt("Ime uloge?", "Seljak");
            if (name == null) return

            names += name;

            if (i != n - 1) names += ", ";

        }

        roles.push(names.split(", "));

        let paragraph = document.createElement("p");
        paragraph.textContent = names;
        paragraph.classList.add("role-text");

        let button = document.createElement("button");
        button.textContent = "×";
        button.classList.add("add_button");
        button.onclick = "destroy(this.id)";
        paragraph.appendChild(button);

        paragraph.setAttribute("id", paragraph_id_on);

        body.appendChild(paragraph);

    }

    paragraph_id_on++;
}

function destroy(id) {
    document.getElementById(id).remove();
}

function choose_roles() {

    let real_roles = [];

    for (let i = 0; i < roles.length; i++) {
        if (typeof(roles[i]) !== "string") {
            real_roles.push(roles[i][Math.floor(Math.random() * roles[i].length)]);
        } else {
            real_roles.push(roles[i]);
        }
    }

    real_roles.sort(() => Math.random() - 0.5);

    for (let i = 0; i < real_roles.length; i++) {
        alert("Ti si " + real_roles[i] + "!");

        if (i == real_roles.length - 1) {
            alert("Gotovo...");
        } else {
            alert("Dalje...");
        }
    }
}