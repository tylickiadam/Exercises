import fs from "fs/promises";
import { Dzielenie } from "./10zadanie.js"
import { writeAndRead } from "./util.js";
import { DEFAULT_RESPONSE } from "./default.js";




console.log( `####  Ćwiczenia  #####`);

// deklarowanie zmiennych
let fV = 6;  
let sV = 2;
let tV = "umpa lumpa";
//wywolanie metody log z pierwsza zmienna jako argumentem
console.log(fV);

console.log(fV+sV,  fV-sV, fV*sV, fV/sV)

//daodałem umpa lumpa
console.log(fV+sV+tV)

//5
function myFunction(a1, a2) {
    console.log(a1+a2);
  }

  myFunction(15,12)

//6
function myFunction2(a1, a2) {
    let message="";
    let suma = a1+a2;
    if (suma < 10) {
        message = "<10"
    } else {
        message = ">10"
    }
    console.log(message);
  }

  myFunction2(a1=15, a2=12)
  myFunction2(fV, sV)


//7

for (let i = 1; i < 11; i++) {
    console.log(i);
  }

// 8
const kurs = [213141,62356,81123]
console.log(kurs[0])
console.log(kurs.reverse())

// 9
const obiekt = {
    "idKuponu": 2137,
    "kurs": 3127,
    "rozliczony": true,
}
//10

x = new Dzielenie(10)
console.log(x.przez2())








//rozkminki

//222222222
// let fV=6;
// let sV=2
// console.log(fV+sV,fV-sV,fV*sV,fV/sV,);
// console.log(fV+sV);
// console.log(fV-sV);
// console.log(fV*sV);
// console.log(fV/sV);


// w dwoch poniższych console log i odpalone sa różne funkcje (message lub komunikat) ktora wersja jest poprawna?
function komunikat(a1,a2){
  let suma = a1+a2;
  let treść = "";
  if (suma < 10) {
    komunikat = "mniej niz 10";
  }
  else if (suma==10) {
    komunikat = "to jest dziesieć";
  } 
  else {
    komunikat = "wieksze niz 10";
  }
  console.log(komunikat)
  }
  komunikat(1,9)


  function myFunction2(a1, a2) {
    let message="";
    let suma = a1+a2;
    if (suma < 10) {
        message = "<10"
    } else {
        message = ">10"
    }
    console.log(message);
  }

  myFunction2(a1=15, a2=12)











//sposob na kwarat- z uzyciem return- dlaczego to nie działa

  function kwadrat(a1){
    mnozenie=a1*a1
    console.log(mnozenie)
}
kwadrat(3)


function myFunction(a, b) {
  return a * b
}
myFunction(2,3)


function dzielenie(a1){
  let wynik=a1/2;

console.log(wynik)
}
dzielenie(8)



