var int;

const ver1 = document.getElementById("ver1");
const ver2 = document.getElementById("ver2");

const title = document.getElementById("title");

const Locked = "███████"

function clamp(a, b, c) {
    return a <= b && a >= c;
}


// nerd shit
class Chars {
    constructor() {
        const charPrefix = "src/imgs/";
        this.names = [
            ["Duggie", "Reverse", "Inverse", "Splitcase", "Noah T.", "Div", "Lu", "Fierce", "Hinge", "Calling", "Vase", "Jason", "Vivisection", "Nihility", "Zenith", "Gelica", "Null", "David J", "Spite", "Melancholy"],
            ["Duggie", "Reverse", "Inverse", "Splitcase", "Noah T.", "Div", "Lu", "Fierce", "Hinge", "Calling", "Vase", "Jason", "Vivisection", "Nihility", "Zenith", "Gelica", "Null", "David J", "Spite", "Melancholy"]
        ],
            this.descriptions = [
                ["Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder"],
                ["Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder"]
            ],
            this.srcs = [
                [`${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`],
                [`${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`, `${charPrefix}Placeholder.png`]
            ]
    }
}

const Characters = new Chars();

class Elem {
    constructor(element) {
        return document.createElement(element.toUpperCase());
    }
}

var t1 = ["beats", "effects", "melodies", "voices", "extras"];

var t2 = ["Beats", "Effects", "Melodies", "Voices", "Extras"];

class Character {
    constructor(name, description, imageSrc, _index, _type) {
        if (!name || !description || !imageSrc || !_type) {
            console.error("All parameters (name, description, imageSrc, ..._type) are required.");
            return;
        }

        this.name = name;
        this.description = description;
        this.imageSrc = imageSrc;

        switch (_type) {
            case "Beats":
                this.type = "beat";
                this.type_label = "Beats";

                break;
            case "Effects":
                this.type = "effect";
                this.type_label = "Effects";

                break;
            case "Melodies":
                this.type = "melodie";
                this.type_label = "Melodies";

                break;
            case "Voices":
                this.type = "voice";
                this.type_label = "Voices";

                break;
            case "Extras":
                this.type = "extra";
                this.type_label = "Extras";

                break;


            default:
                console.error("Invalid type in class: Character");
                return;
        }

        this.render(_index);
    }

    render(i) {
        let container = document.createElement("div");
        container.className = "char";
        container.style.border = "2px solid #333";
        container.style.padding = "15px";
        container.style.marginTop = "20px";
        container.style.maxWidth = "200px";
        container.style.fontFamily = "Arial, sans-serif";

        // Name
        let title = document.createElement("h3");
        title.textContent = this.name;
        container.appendChild(title);

        // Description
        let desc = document.createElement("p");
        desc.textContent = this.description;
        container.appendChild(desc);

        // Image
        let img = document.createElement("img");
        img.src = this.imageSrc;
        img.alt = "Character Image";
        img.style.maxWidth = "50px";
        img.style.height = "auto";
        img.style.border = "1px solid #ccc";
        img.style.marginTop = "10px";
        container.appendChild(img);

        let btn = document.createElement("button");
        btn.className = "btn_a";
        btn.id = this.name;
        btn.name = i;
        btn.appendChild(container);

        document.getElementById(this.type).appendChild(btn);
        document.getElementById(`${this.type}s_label`).innerHTML = this.type_label;
    }
}

class Tab {
    constructor(options, id, container) {
        this.select = new Elem("select");

        if (id !== null || id !== undefined || id !== "") {
            this.select.id = id;
        }

        options.forEach((element, index) => {
            this.option = new Elem("option");
            this.option.value = element.toLowerCase();
            this.option.innerHTML = element;

            this.select.appendChild(this.option);
        });

        if (container !== null || container !== undefined || container !== "") {
            this.container = new Elem("div");
            this.container.class = "grid-container";
            this.select.class = "grid-item";

            this.container.appendChild(this.select);

            document.body.appendChild(this.container);
            return;
        }

        document.body.appendChild(this.select);
    }
}

function getVer(_version, _var, index) {
    let c = new Chars();

    switch (_var) {
        case "names":
            return c.names[_version][index];
            break;

        case "descriptions":
            return c.descriptions[_version][index];
            break;

        case "srcs":
            return c.srcs[_version][index];
            break;

        default:
            throw error("No variable was found. try 'names' 'descriptions' or 'srcs'");
            break;
    }
}

function generate(chars, ltype, version, mode) {
    // version index
    let l = int;

    // swipe previous instance
    clear();

    // generate more
    for (let index = 0; index < chars; index++) {
        let x = new Character(getVer(int, "names", index), getVer(int, "descriptions", index), getVer(int, "srcs", index), index, ltype);
    }
}

function byID(id) {
    return getElementById(id);
}

function clear() {
    let a = document.getElementById("gridcontainer");

    Array.from(a.childNodes).forEach(element => {
        if (!Array.from(a.getElementsByClassName("avoid")).includes(element)) {
            a.removeChild(element);
        }
    });
}

function update(version) {
    switch (version) {
        case 1:
            int = 0;

            ver1.enabled = false;
            ver2.enabled = true;

            title.innerHTML = "Fale 1";

            preGen();
            break;
        case 2:
            int = 1;

            ver1.enabled = true;
            ver2.enabled = false;

            title.innerHTML = "Fale 2";

            preGen();
            break;

        default:
            int = 0;

            ver1.enabled = false;
            ver2.enabled = true;

            title.innerHTML = "Fale 1";

            preGen();
            break;
    }
}

update(1);

ver1.addEventListener("click", () => {
    update(1)
});

ver2.addEventListener("click", () => {
    update(2)
});


int = 1;

function preGen() {
    generate(5, "Beats", int);
    generate(5, "Effects", int);
    generate(5, "Melodies", int);
    generate(5, "Voices", int);

    // generate(5, "Extras", int);
}