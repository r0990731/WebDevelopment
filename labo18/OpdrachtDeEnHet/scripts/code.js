const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel"
    let gesplitst = tekst.split(" ")

    for(let i = 0; i<gesplitst.length; i++){
        if(gesplitst[i]=== "de"){
            gesplitst[i] = "het"
        }
        else if(gesplitst[i] ==="De"){
            gesplitst[i] = "Het"
        }
    }
    let nieuweTekst = gesplitst.join(" ")
    console.log(nieuweTekst)
}
window.addEventListener("load", setup);