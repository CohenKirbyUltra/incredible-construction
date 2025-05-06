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
        const charPrefix = "imgs/Characters/";
        this.names = [
            ["Duggie","Reverse","Inverse","Splitcase","Noah T.","Div","Lu","Fierce","Hinge","Calling","Vase","Jason","Vivisection","Nihility","Zenith","Gelica","Null","David J","Spite","Melancholy"],
            ["Duggie","Reverse","Inverse","Splitcase","Noah T.","Div","Lu","Fierce","Hinge","Calling","Vase","Jason","Vivisection","Nihility","Zenith","Gelica","Null","David J","Spite","Melancholy"]
        ],
        this.descriptions = [
            ["Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder"],
            ["Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder","Placeholder"]
        ],
        this.srcs = [
            [`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`],
            [`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`,`${charPrefix}Placeholder.png`]
        ]
    }
}

const Characters = new Chars();

class Elem {
    constructor(element) {
        return document.createElement(element.toUpperCase());
    }
}

class Character {
    constructor(name, description, imageSrc, _index) {
      if (!name || !description || !imageSrc) {
        console.error("All parameters (name, description, imageSrc) are required.");
        return;
      }
  
      this.name = name;
      this.description = description;
      this.imageSrc = imageSrc;
  
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
      img.style.maxWidth = "50%";
      img.style.height = "auto";
      img.style.border = "1px solid #ccc";
      img.style.marginTop = "10px";
      container.appendChild(img);

      let btn = document.createElement("button");
      btn.className = "btn_a";
      btn.id = this.name;
      btn.appendChild(container);

      if (clamp(i, 4, 0)) {
        document.getElementById("beats").appendChild(btn); 
        document.getElementById("beats_label").innerHTML = "Beats";
      }
      if (clamp(i, 9, 5)) {
        document.getElementById("effects").appendChild(btn); 
        document.getElementById("effects_label").innerHTML = "Effects";
      }
      if (clamp(i, 14, 10)) {
        document.getElementById("melodies").appendChild(btn); 
        document.getElementById("melodies_label").innerHTML = "Melodies";
      }
      if (clamp(i, 19, 15)) {
        document.getElementById("voices").appendChild(btn); 
        document.getElementById("voices_label").innerHTML = "Voices";
      }
      if (clamp(i, 24, 20)) {
        document.getElementById("extras").appendChild(btn); 
        document.getElementById("extras_label").innerHTML = "Extras";
      }
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

function generate(chars, version, mode) {
    // version index
    let l = int;

    // swipe previous instance
    clear();

    // generate more
    for (let index = 0; index < chars; index++) {
        let x = new Character(getVer(int, "names", index), getVer(int, "descriptions", index), getVer(int, "srcs", index), index);
    }       
}

function byID(id) {
    return getElementById(id);
}

function clear() {
    let a = document.getElementById("gridcontainer");

    try {
        Array.from(a.childNodes).forEach(element => {
            if (!Array.from(a.getElementsByClassName("avoid").includes(element))) {
                a.removeChild(element);
            }                
        });    
    } catch (error) {
        throw error("nothing was in the container. skipped.");
    }

}

function update(version) {
    switch (version) {
        case 1:
            int = 0;

            ver1.enabled = false;
            ver2.enabled = true;

            title.innerHTML = "Fale 1";

            generate(20, "fale1");
            break;
        case 2:
            int = 1;

            ver1.enabled = true;
            ver2.enabled = false;

            title.innerHTML = "Fale 2";

            generate(20, "fale2");
            break;
    
        default:
            int = 0;
            
            ver1.enabled = false;
            ver2.enabled = true;

            title.innerHTML = "Fale 1";

            generate(20, "fale1");
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
generate(20, int);