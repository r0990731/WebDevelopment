const setup = () => {
    let knopIndexOf = document.getElementById("indexOf")
    let knopLastIndexOf = document.getElementById("lastIndexOf")
    console.log("De man van An geeft geen hand aan ambetante verwanten")
    knopIndexOf.addEventListener("click", indexOf)
    knopLastIndexOf.addEventListener("click", lastIndexOf)
}

const indexOf = ()=>{
    let tekst = "De man van An geeft geen hand aan ambetante verwanten"
    tekst.toLowerCase()
    let index = 0
    let i = 0
    let teller = 0
    let doorgelopen = false
    while(i<tekst.length && !doorgelopen){
        if(tekst.indexOf("an",index)!==-1){
            index = tekst.indexOf("an",index)+1
            teller ++
            i++
        }
        else{
            doorgelopen = true
        }
    }
    console.log("Het woord 'an' komt " + teller + " keer voor met indexOf()")
}
const lastIndexOf = () =>{
    let tekst = "De man van An geeft geen hand aan ambetante verwanten"
    tekst.toLowerCase()
    let index = tekst.length
    let i = tekst.length
    let teller = 0
    let doorgelopen = false
    while(i>0 && !doorgelopen){
        if(tekst.lastIndexOf("an",index)!==-1){
            index = tekst.lastIndexOf("an",index)-1
            teller ++
            i--
        }
        else{
            doorgelopen = true
        }
    }
    console.log("Het woord 'an' komt " + teller + " keer voor met lastIndexOf()")
}
window.addEventListener("load", setup);