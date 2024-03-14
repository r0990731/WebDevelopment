const setup = () => {
    let gemeenten = []
    let stop = false
    let index = 0

    do{
        let gemeente = window.prompt("Gemeente", "stop")
        if(gemeente.toLowerCase() !== "stop"){
            gemeenten[index] = gemeente
            index++
        }
        else{
            stop = true
        }
    } while(!stop)

    gemeenten.sort()
    let output = document.getElementById("gemeenten")
    for(let i = 0; i < gemeenten.length; i++){
        output.innerHTML += "<option value=" + gemeenten[i] + ">" + gemeenten[i] + "</option>"
    }

}
window.addEventListener("load", setup);