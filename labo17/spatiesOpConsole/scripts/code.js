const setup = () => {
    let knop = document.getElementById("button")
    knop.addEventListener("click", verander)
}
const verander =() =>{
    let input = document.getElementById("tekstvak")
    let tekst = input.value

    console.log(tekst.split(" "))
}
window.addEventListener("load", setup);