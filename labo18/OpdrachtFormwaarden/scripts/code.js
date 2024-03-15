const setup = () => {
    let knop = document.getElementById("knop")
    knop.addEventListener("click", afdrukken)
}
    const afdrukken = () => {
        let roker = document.getElementById("roker")
        let moedertaal = document.getElementsByTagName("moedertaal")
        let buurland = document.getElementById("favoBuurland")
        let bestelling = document.getElementById("bestellingen")

        if (roker.checked) {
            console.log("is roker")
        } else {
            console.log("is geen roker")
        }
        let waarde = ""
        for(let i=0; i<moedertaal.length; i++){
            if(moedertaal[i].checked){
                waarde = moedertaal[i].value
            }
        }

        let afdrukBuurland = "favoriete buurland is "
        for(let i=0; i<buurland.length;i++){
            if(buurland[i].selected){
                afdrukBuurland+= buurland[i].value
            }
        }

        let afdruk = "bestellingen bestaan uit "
        for (let i = 0; i < bestelling.length; i++) {
            if (bestelling[i].selected) {
                afdruk += bestelling[i].value + " "
            }
        }
        console.log("moedertaal is " + waarde)
        console.log(afdrukBuurland)
        console.log(afdruk)
    }
window.addEventListener("load", setup);