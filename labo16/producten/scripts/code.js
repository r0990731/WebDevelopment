const setup = () => {
    let button = document.getElementById("herbereken");
    button.addEventListener("click",bereken )
}

let bereken = () =>{
    let prijs = document.getElementsByClassName("prijs");
    let aantal = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtotaal = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementById("totaal");

    let berekenSub1 = ((parseInt(prijs[0].textContent))*aantal[0].value)+((parseInt(prijs[0].textContent)*aantal[0].value)*(parseInt(btw[0].textContent,10))/100);
    let berekenSub2 = ((parseInt(prijs[1].textContent))*aantal[1].value)+((parseInt(prijs[1].textContent)*aantal[1].value)*(parseInt(btw[1].textContent,10))/100);
    let berekenSub3 = ((parseInt(prijs[2].textContent))*aantal[2].value)+((parseInt(prijs[2].textContent)*aantal[2].value)*(parseInt(btw[2].textContent,10))/100);

    subtotaal[0].textContent=berekenSub1.toFixed(2)+' Eur';
    subtotaal[1].textContent=berekenSub2.toFixed(2)+' Eur';
    subtotaal[2].textContent=berekenSub3.toFixed(2)+' Eur';

    totaal.textContent = (berekenSub1+berekenSub2+berekenSub3).toFixed(2) +" Eur"
}
window.addEventListener("load", setup);