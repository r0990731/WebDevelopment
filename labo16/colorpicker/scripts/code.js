const setup = () => {
    let color=document.getElementsByClassName("color");
    let slider = document.getElementsByClassName("slider")

    slider[0].addEventListener("change", veranderRood)
    slider[0].addEventListener("input", veranderRood)
    slider[1].addEventListener("change", veranderGroen)
    slider[1].addEventListener("input", veranderGroen)
    slider[2].addEventListener("change", veranderBlauw)
    slider[2].addEventListener("input", veranderBlauw)

    updateColor()
}
const veranderRood = () =>{
    let slider = document.getElementsByClassName("slider")
    let rood = slider[0].value;
    updateColor()
}
const veranderGroen = () =>{
    let slider = document.getElementsByClassName("slider")
    let groen = slider[1].value;
    updateColor()
}
const veranderBlauw = () =>{
    let slider = document.getElementsByClassName("slider")
    let blauw = slider[2].value;
    updateColor()
}
const updateColor = () =>{
    let slider = document.getElementsByClassName("slider")
    let kleur = document.getElementsByClassName("color")
    let rood = slider[0].value
    let groen = slider[1].value
    let blauw = slider[2].value

    let rgb = "rgb(" + rood + "," + groen + "," + blauw + ")"
    kleur[0].style.backgroundColor = rgb

    let span = document.getElementsByTagName("span")
    span[0].textContent = "Rood: " + rood
    span[1].textContent = "Groen: " + groen
    span[2].textContent = "Blauw: " + blauw

    kleur[0].style.backgroundColor = rgb
}
window.addEventListener("load", setup);