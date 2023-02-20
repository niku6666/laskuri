// document.getElementById("laskuri-el").innerText = 5
let nimi = "Orja Keisari"
let terve = "Welcome back"
let laskuri = 0
let tallennus = "Orjat: "
let tervekutsu = document.getElementById("Terve-el")
let tallennuskutsu = document.getElementById("tallennus-el")


tallennuskutsu.innerText = tallennus
console.log(terve + nimi)
tervekutsu.innerText=terve + nimi

document.getElementById("Nappula")

function IhmisenLisaus(){

laskuri = laskuri + 1
console.log(laskuri)
document.getElementById("laskuri-el").innerText = laskuri

}

function IhmisenPoisto(){
 if (laskuri >= 1)
 laskuri = laskuri - 1
 console.log(laskuri)
 document.getElementById("laskuri-el").innerText = laskuri

}

function KaikkiPois(){

 laskuri = 0
 console.log(laskuri)
 document.getElementById("laskuri-el").innerText = laskuri


}

function Tallenna(){

 console.log(laskuri)
 tallennus = tallennus + " - " + laskuri
 tallennuskutsu.innerText = tallennus
 

}





