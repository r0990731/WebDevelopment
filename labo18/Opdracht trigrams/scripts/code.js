const setup = () => {
    let tekst = "onoorbaar"
    let output = ""
    for(let i=0; i<tekst.length; i++){
        if(tekst.slice(i,i+3).length === 3) {
            output += tekst.slice(i, i + 3) + "\n"
        }
    }
    console.log(output)
}
window.addEventListener("load", setup);