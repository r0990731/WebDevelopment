const setup = () => {
    let li = document.querySelectorAll("li")

    for(let i=0; i<li.length;i++){
        li[i].className= "listitem"
    }
    let nieuweFoto = document.createElement("img")
    nieuweFoto.setAttribute("src", "images/YorbenCoulier.jpg")
    document.body.appendChild(nieuweFoto)
}
window.addEventListener("load", setup);