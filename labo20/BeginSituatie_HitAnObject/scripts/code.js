let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    let img = document.querySelector('img')
    img.addEventListener("click", verplaatsFoto)
    img.addEventListener("click", setRandomImage)
    //setInterval(printTekst, 1000)
};
const verplaatsFoto = () => {
    let img = document.querySelector('#target')
    let speelveld = document.querySelector('#playField')

    let maxWidth = speelveld.clientWidth - global.IMAGE_SIZE
    let maxHeigth = speelveld.clientHeight - global.IMAGE_SIZE

    let left = Math.floor(Math.random()*maxWidth)
    let right = Math.floor(Math.random()*maxHeigth)

    img.style.left=left+"px";
    img.style.top=right+"px";
}
const setRandomImage = () =>{
    let img = document.querySelector("#target")
    let random = Math.floor(Math.random() * global.IMAGE_COUNT)
    let path = global.IMAGE_PATH_PREFIX + random + global.IMAGE_PATH_SUFFIX
    img.setAttribute('src', path)
    //console.log(random)
    if(img.getAttribute('src') === 'images/0.png'){
        global.timeoutId = setTimeout(setRandomImage, global.MOVE_DELAY)
    } else{
        clearTimeout(global.timeoutId)
    }
}
const printTekst = () => {
    let tekst = "dit is een tekst op de console"
    console.log(tekst)
}
window.addEventListener("load", setup);