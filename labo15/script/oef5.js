const setup = () => {
    let knop=document.getElementById("knop");
    knop.addEventListener("click", wijzigen);

}
window.addEventListener("load", setup);

wijzigen  = () =>{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}