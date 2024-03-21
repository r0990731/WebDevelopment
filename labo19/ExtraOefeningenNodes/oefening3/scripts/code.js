const setup = () => {
    let knop = document.querySelector("#knop")
    knop.addEventListener("click", veranderTekstNaarDiv)
}
const veranderTekstNaarDiv = () =>{
    let tekst = document.querySelector("#tekstvak").value
    let nieuweP = document.createElement("p")
    let tekstInhoud = document.createTextNode(tekst)
    let tussenregel = document.createElement("br")
    let div = document.querySelector("#myDIV")

    div.appendChild(tussenregel)
    div.appendChild(nieuweP.appendChild(tekstInhoud))
}
window.addEventListener("load", setup);