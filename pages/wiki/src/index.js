var index;

const tabs = {
    versions:   [
        "Fale 1", 
        "Fale 2"
    ],
    modes: {
        fale1: [
            "New", 
            "Legacy", 
            "Legacy Mixer"
        ],

        fale2: [
            "New",
            "Legacy",
            "Legacy Mixer"
        ]
    }
};

const ver1 = document.getElementById("ver1");
const ver2 = document.getElementById("ver2");

const title = document.getElementById("title");

const Locked = "███████"

const charPrefix = "imgs/Characters/";

// nerd shit
const Chars = new Array(
        [
            [
                [
                    "Duggie",
                    "Reverse",
                    "Inverse",
                    "Splitcase",
                    "Noah T.",
                    "Div",
                    "Lu",
                    "Fierce",
                    "Hinge",
                    "Calling",
                    "Vase",
                    "Jason",
                    "Vivisection",
                    "Nihility",
                    "Zenith",
                    "Gelica",
                    "Null",
                    "David J",
                    "Spite",
                    "Melancholy"
                ]
                [
                    "Duggie",
                    "Reverse",
                    "Inverse",
                    "Splitcase",
                    "Noah T.",
                    "Div",
                    "Lu",
                    "Fierce",
                    "Hinge",
                    "Calling",
                    "Vase",
                    "Jason",
                    "Vivisection",
                    "Nihility",
                    "Zenith",
                    "Gelica",
                    "Null",
                    "David J",
                    "Spite",
                    "Melancholy"
                ]
        ]
    ]
    [
        [
                [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                ]
                [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                ]
            ]
        ]
    ]
    [
        [
                [
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`
                ]
                [
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`,
                    `${charPrefix}.Placeholder.png`
                ]
        ]
    ]
);

class Elem {
    constructor(element) {
        return document.createElement(element.toUpperCase());
    }
}

class Character {
    constructor(name, description, imageSrc) {
      if (!name || !description || !imageSrc) {
        console.error("All parameters (name, description, imageSrc) are required.");
        return;
      }
  
      this.name = name;
      this.description = description;
      this.imageSrc = imageSrc;
  
      this.render();
    }
  
    render() {
      const container = document.createElement("div");
      container.style.border = "2px solid #333";
      container.style.padding = "15px";
      container.style.marginTop = "20px";
      container.style.maxWidth = "200px";
      container.style.fontFamily = "Arial, sans-serif";
      container.class = "char";
  
      // Name
      const title = document.createElement("h3");
      title.textContent = this.name;
      container.appendChild(title);
  
      // Description
      const desc = document.createElement("p");
      desc.textContent = this.description;
      container.appendChild(desc);
  
      // Image
      const img = document.createElement("img");
      img.src = this.imageSrc;
      img.alt = "Character Image";
      img.style.maxWidth = "50%";
      img.style.height = "auto";
      img.style.border = "1px solid #ccc";
      img.style.marginTop = "10px";
      container.appendChild(img);
  
      document.getElementById("gridcontainer").appendChild(container);
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
  
function generate(chars, names, descriptions, srcs) {
    for (let index = 0; index < chars; index++) {
        new Character(Characters.names[index], Characters.descriptions[index], Characters.srcs[index]);
    }
}

class chars() {
    generate(chars, version, mode) {
        for (let index = 0; index < chars; index++) {
            new Character(this.getVer(index, 0), this.getVer(index, 1), this.getVer(index, 2));
        }        
    }

    clear() {
        document.getElementsByClassName("char").forEach((element) => {
            try {
                document.body.removeChild(element);                
            } catch {
                
            }
        });
    }

    getVer(_version, _var) {
        return Chars[_var][0][_version];
    }
}

function update(version) {
    switch (version) {
        case 1:
            index = 0;

            ver1.enabled = false;
            ver2.enabled = true;

            title.innerHTML = "Fale 1";

            chars.generate(20, "fale1");
            break;
        case 2:
            index = 1;

            ver1.enabled = true;
            ver2.enabled = false;

            title.innerHTML = "Fale 2";

            chars.generate(20, "fale2");
            break;
    
        default:
            index = 0;
            
            ver1.enabled = false;
            ver2.enabled = true;

            title.innerHTML = "Fale 1";

            chars.generate(20, "fale1");
            break;
    }
}

update();

ver1.addEventListener("click", () => {
    update(1)
});

ver2.addEventListener("click", () => {
    update(2)
});



new chars.generate(20, document.getElementById(Versions.select.id).value);