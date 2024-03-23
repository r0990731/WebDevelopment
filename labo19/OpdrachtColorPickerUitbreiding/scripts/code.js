const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let opslaanKnop = document.querySelector("#saveKnop")
    opslaanKnop.addEventListener("click", opslaan)

    for(let i=0; i<sliders.length;i++){
        sliders[i].addEventListener("change", updateColor);
        sliders[i].addEventListener("input", updateColor);
    }
}
const updateColor = () =>{

    let sliders = document.getElementsByClassName("slider");
    let color = document.getElementsByClassName("color");
    let valueRed=sliders[0].value;
    let valueGreen=sliders[1].value;
    let valueBlue=sliders[2].value;
    let rgb ="rgb("+valueRed+","+valueGreen+","+valueBlue+")";

    color[0].style.backgroundColor = rgb;
    let span = document.getElementsByTagName("span");
    span[0].textContent = "Rood "+valueRed;
    span[1].textContent = "Groen "+valueGreen;
    span[2].textContent = "Blauw "+valueBlue;
}
const click = (event) => {
    //updateColor()
    let sliders = document.getElementsByClassName("slider");
    let color = document.getElementsByClassName("color");

    let valueRed=sliders[0].value;
    let valueGreen=sliders[1].value;
    let valueBlue=sliders[2].value;
    let rgb ="rgb("+valueRed+","+valueGreen+","+valueBlue+")";

    color[0].style.backgroundColor = rgb;
    let span = document.getElementsByTagName("span");
    span[0].textContent = "Rood "+valueRed;
    span[1].textContent = "Groen "+valueGreen;
    span[2].textContent = "Blauw "+valueBlue;
}
const opslaan = () => {
    let nieuweBlock = document.createElement("div")
    nieuweBlock.className = "block"
    let kleurBlock = document.createElement("div")
    kleurBlock.className = "color"

    let Xknop = document.createElement("input")
    Xknop.setAttribute('type', button)
    Xknop.setAttribute('value', "X")
    Xknop.className = "verwijderenKnop"

    kleurBlock.appendChild(Xknop)
    nieuweBlock.appendChild(kleurBlock)
    document.body.appendChild(nieuweBlock)

    let sliders = document.getElementsByClassName("slider");
    let color = document.getElementsByClassName("color");

    let valueRed=sliders[0].value;
    let valueGreen=sliders[1].value;
    let valueBlue=sliders[2].value;
    let rgb ="rgb("+valueRed+","+valueGreen+","+valueBlue+")";

    color[color.length-1].style.backgroundColor=rgb

    let verwijderKnop = document.querySelectorAll(".verwijderKnop")
    for(let i = 0; i<verwijerKnop.lenth; i++){
        verwijderKnop[i].addEventListener("click", verwijderenVanBlok)
    }
}
const verwijderenVanBlok = (event) =>{
    event.target.parentElement.parentElement.remove();
}
const save =
window.addEventListener("load", setup);