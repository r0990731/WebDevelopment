const setup = () => {
    let knop = document.getElementById("button")
    knop.addEventListener("click", verander)
}
const verander = () =>{
    let tekstvak = document.getElementById("tekstvak")
    let tekst = tekstvak.value
    //console.log(tekst.value)
    console.log(maakMetSpaties(tekst))
}
const maakMetSpaties =(inputText) =>{
    let result = ""
    for(let i=0;i<inputText.length;i++){
        if(inputText.charAt(i)!== " "){
            result += inputText.charAt(i) + " "
        }
    }
    return result
}
window.addEventListener("load", setup);