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

        document.getElementById(this.type_label).appendChild(btn);
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

function preGen() {
    new Character(
        getVer(int, "names", 0), 
        getVer(int, "descriptions", 0), 
        getVer(int, "srcs", 0), 0, "Beats"
    );
    new Character(
        getVer(int, "names", 1), 
        getVer(int, "descriptions", 1), 
        getVer(int, "srcs", 1), 1, "Beats"
    );
    new Character(
        getVer(int, "names", 2), 
        getVer(int, "descriptions", 2), 
        getVer(int, "srcs", 2), 2, "Beats"
    );
    new Character(
        getVer(int, "names", 3), 
        getVer(int, "descriptions", 3), 
        getVer(int, "srcs", 3), 3, "Beats"
    );
    new Character(
        getVer(int, "names", 4), 
        getVer(int, "descriptions", 4), 
        getVer(int, "srcs", 4), 4, "Beats"
    );
    

    new Character(
        getVer(int, "names", 5), 
        getVer(int, "descriptions", 5), 
        getVer(int, "srcs", 5), 5, "Effects"
    );
    new Character(
        getVer(int, "names", 6), 
        getVer(int, "descriptions", 6), 
        getVer(int, "srcs", 6), 6, "Effects"
    );
    new Character(
        getVer(int, "names", 7), 
        getVer(int, "descriptions", 7), 
        getVer(int, "srcs", 7), 7, "Effects"
    );
    new Character(
        getVer(int, "names", 8), 
        getVer(int, "descriptions", 8), 
        getVer(int, "srcs", 8), 8, "Effects"
    );
    new Character(
        getVer(int, "names", 9), 
        getVer(int, "descriptions", 9), 
        getVer(int, "srcs", 9), 9, "Effects"
    );
    

    new Character(
        getVer(int, "names", 10), 
        getVer(int, "descriptions", 10), 
        getVer(int, "srcs", 10), 10, "Melodies"
    );
    new Character(
        getVer(int, "names", 11), 
        getVer(int, "descriptions", 11), 
        getVer(int, "srcs", 11), 11, "Melodies"
    );
    new Character(
        getVer(int, "names", 12), 
        getVer(int, "descriptions", 12), 
        getVer(int, "srcs", 12), 12, "Melodies"
    );
    new Character(
        getVer(int, "names", 13), 
        getVer(int, "descriptions", 13), 
        getVer(int, "srcs", 13), 13, "Melodies"
    );
    new Character(
        getVer(int, "names", 14), 
        getVer(int, "descriptions", 14), 
        getVer(int, "srcs", 14), 14, "Melodies"
    );
    

    new Character(
        getVer(int, "names", 14), 
        getVer(int, "descriptions", 14), 
        getVer(int, "srcs", 14), 14, "Voices"
    );
    new Character(
        getVer(int, "names", 15), 
        getVer(int, "descriptions", 16), 
        getVer(int, "srcs", 16), 16, "Voices"
    );
    new Character(
        getVer(int, "names", 17), 
        getVer(int, "descriptions", 17), 
        getVer(int, "srcs", 17), 17, "Voices"
    );
    new Character(
        getVer(int, "names", 18), 
        getVer(int, "descriptions", 18), 
        getVer(int, "srcs", 18), 18, "Voices"
    );
    new Character(
        getVer(int, "names", 19), 
        getVer(int, "descriptions", 19), 
        getVer(int, "srcs", 19), 19, "Voices"
    );
}

function amountChars(div) {
    let count = 0;
    Array.from(document.getElementById(div).childNodes).forEach(element => {
        if (element.className = "btn_a") {count++}
    });

    return count;
}

function clearExtras() {
    if (amountChars("Beats") > 5) {
        document.getElementById("Beats").removeChild(document.getElementById("Beats").childNodes[6]);
        document.getElementById("Beats").removeChild(document.getElementById("Beats").childNodes[7]);
        document.getElementById("Beats").removeChild(document.getElementById("Beats").childNodes[8]);
        document.getElementById("Beats").removeChild(document.getElementById("Beats").childNodes[9]);
        document.getElementById("Beats").removeChild(document.getElementById("Beats").childNodes[10]);
    }
    if (amountChars("Effects") > 5) {
        document.getElementById("Effects").removeChild(document.getElementById("Effects").childNodes[6]);
        document.getElementById("Effects").removeChild(document.getElementById("Effects").childNodes[7]);
        document.getElementById("Effects").removeChild(document.getElementById("Effects").childNodes[8]);
        document.getElementById("Effects").removeChild(document.getElementById("Effects").childNodes[9]);
        document.getElementById("Effects").removeChild(document.getElementById("Effects").childNodes[10]);
    }
    if (amountChars("Melodies") > 5) {
        document.getElementById("Melodies").removeChild(document.getElementById("Melodies").childNodes[6]);
        document.getElementById("Melodies").removeChild(document.getElementById("Melodies").childNodes[7]);
        document.getElementById("Melodies").removeChild(document.getElementById("Melodies").childNodes[8]);
        document.getElementById("Melodies").removeChild(document.getElementById("Melodies").childNodes[9]);
        document.getElementById("Melodies").removeChild(document.getElementById("Melodies").childNodes[10]);
    }
    if (amountChars("Voices") > 5) {
        document.getElementById("Voices").removeChild(document.getElementById("Voices").childNodes[6]);
        document.getElementById("Voices").removeChild(document.getElementById("Voices").childNodes[7]);
        document.getElementById("Voices").removeChild(document.getElementById("Voices").childNodes[8]);
        document.getElementById("Voices").removeChild(document.getElementById("Voices").childNodes[9]);
        document.getElementById("Voices").removeChild(document.getElementById("Voices").childNodes[10]);
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

preGen();