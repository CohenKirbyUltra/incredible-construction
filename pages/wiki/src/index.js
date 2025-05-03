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


const Locked = "███████"

const Characters = {
    names: [
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
    ],
    descriptions: [
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
    ],
    srcs: [
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png",
        "src/imgs/deada.png"
    ]
}

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
  
      document.body.appendChild(container);
    }
}

class Tab {
    constructor(options, id) {
        let select = new Elem("select");
        
        if (id !== null || id !== undefined || id !== "") {
            select.id = id;
        }

        options.forEach((element, index) => {
            let option = new Elem("option");
            option.value = element.toLowerCase();
            option.innerHTML = element;

            select.appendChild(option);
        });

        document.body.appendChild(select);
    }
}
  
function generate(chars, names, descriptions, srcs) {
    for (let index = 0; index < chars; index++) {
        new Character(Characters.names[index], Characters.descriptions[index], Characters.srcs[index]);
    }
}

generate(20);

new Tab(tabs.versions);

new Tab(tabs.modes.fale1);
new Tab(tabs.modes.fale2);