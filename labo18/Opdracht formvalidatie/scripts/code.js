const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam()
	valideerGeboortedatum()
	valideerEmail()
	valideerKinderen()
	popup()
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
}

const valideerFamilienaam =() => {
	let txtFamilienaam = document.getElementById("txtFamilienaam")
	let errFamilienaam = document.getElementById("errFamilienaam")
	let familienaam = txtFamilienaam.value.trim()
	if(familienaam.length === 0){
		txtFamilienaam.classname ="invalid"
		errFamilienaam.innerHTML = "verplicht veld"
	}
	else if (familienaam.length > 50) {
		txtFamilienaam.className="invalid"
		errFamilienaam.innerHTML = "max. 50 karakters"
	} else {
		txtFamilienaam.className=""
		errFamilienaam.innerHTML = ""
	}
}

const valideerGeboortedatum = () =>{
	let txtGeboortedatum = document.getElementById("txtGeboortedatum")
	let errGeboortedatum = document.getElementById("errGeboortedatum")
	let geboortedatum = txtGeboortedatum.value.trim()
	let jaar = geboortedatum.slice(0,4)
	let maand = geboortedatum.slice(5,7)
	let dag = geboortedatum.slice(8)
	let separator1 = geboortedatum.slice(4,5)
	let separator2 = geboortedatum.slice(7,8)
	if(geboortedatum.length === 0){
		txtGeboortedatum.className = "invalid"
		errGeboortedatum.innerHTML = "verplicht veld"
	}
	else if(isGetal(jaar.split(" ").join("")) && separator1 === "-" && isGetal(maand.split(" ").join("") && separator2 === "-" && isGetal(dag.split(" ").join("")))){
		txtGeboortedatum.className = ""
		errGeboortedatum.innerHTML = ""
	}
	else{
		txtGeboortedatum.className = "invalid"
		errGeboortedatum.innerHTML = "formaat is niet jjjj-mm-dd"
	}
}

const valideerEmail = () =>{
	let txtEmail = document.getElementById("txtEmail")
	let errEmail = document.getElementById("errEmail")
	let email = txtEmail.value.trim()
	if(email.length === 0){
		txtEmail.className = "invalid"
		errEmail.innerHTML = "verplicht veld"
	}
	else if(email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/)){
		txtEmail.classname = ""
		errEmail.innerHTML = ""
	}
	else{
		txtEmail.classname = "invalid"
		errEmail.innerHTML = "geen geldig email adres"
	}
}

const valideerKinderen = () =>{
	let txtKinderen = document.getElementById("txtAantalKinderen")
	let errKinderen = document.getElementById("errAantalKinderen")
	let kinderen = txtKinderen.value.trim()
	if(isGetal(kinderen)){
		if(Number(kinderen) < 0 ){
			txtKinderen.className = "invalid"
			errKinderen.innerHTML = "is geen positief getal"
		}
		else if(Number(kinderen) >= 99){
			txtKinderen.className = "invalid"
			errKinderen.innerHTML = "is te vruchtbaar"
		}
		else{
			txtKinderen.classname = ""
			errKinderen.innerHTML = ""
		}
	}
	else{
		txtKinderen.className = "invalid"
		errKinderen.innerHTML = "is geen positief getal"
	}
}

const popup =() =>{
	let invalid = document.getElementsByClassName("invalid")
	if(invalid.length === 0){
		window.alert("Proficiat!")
	}
}

const isGetal = (tekst) => {
	return !isNaN(tekst);
}

window.addEventListener("load", setup);