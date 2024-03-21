const setup = () => {
    let tekst = document.getElementById("keuzelijst").value
    let image = document.getElementById("img")
    let paragraaf = document.getElementById("node")
    let teken = document.getElementById("tekstvak").value

    let afdruk =  "<br>Letter " +teken +" komt "+ indexOf() + " keer voor in bonvenstaande zin."

    if(tekst === "Met een ei"){
        image.className = "with-egg"

        if(teken.length !==0){
            paragraaf.innerHTML = "Hierboven een kip met een ei" + afdruk
        }
        else{
            paragraaf.innerHTML = "Hierboven een kip met een ei"
        }
    }
    else if(tekst === "Zonder een ei"){
        image.className =""

        if(teken.length !==0){
            paragraaf.innerHTML = "Hierboven een kip zonder een ei" + afdruk
        }
        else{
            paragraaf.innerHTML = "Hierboven een kip zonder een ei"
        }
    }
}
const indexOf = ()=>{
    let tekstvak = document.getElementById("node")
    let tekst = tekstvak.value
    let teken = document.getElementById("tekstvak").value
    tekst.toLowerCase()
    let index = 0
    let i = 0
    let teller = 0
    let doorgelopen = false
    while(i<tekst.length && !doorgelopen){
        if(tekst.indexOf(teken,index)!==-1){
            index = tekst.indexOf(teken,index)+1
            teller ++
            i++
        }
        else{
            doorgelopen = true
        }
    }
    return teller
}
window.addEventListener("load", setup);