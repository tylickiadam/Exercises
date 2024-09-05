function suma(a1,a2,a3){
    console.log(a1+a2+a3)
}
suma(1,2,3)

function wynikSrednia(a1,a2,a3){
    let srednia=(a1+a2+a3)/3
    console.log(srednia)
}
wynikSrednia(1,2,3)


function policzPierwiastek(a1){
    let pierwiastek=Math.sqrt(a1);
    console.log(pierwiastek)
}
policzPierwiastek(8)

function policzKwadrat(a1){
let kwadrat=Math.pow(a1,2,);
console.log(kwadrat)
}
policzKwadrat(10)

function poleProstokąta(a1,a2){
    let pole=a1*a2
    console.log(pole)
}
poleProstokąta(2,8)

function poleKoła(a1){
    let pole= Math.pow(a1,2,)*3.14
    console.log(pole)
}
poleKoła(3)

function obwodKola(a2){
    obwód=2*3.14*a2
    console.log(obwód)
}
obwodKola(5)

function kosztPodrozy(a1){
koszt=3.6*8*a1
console.log(koszt)
}
kosztPodrozy(5.50)



//algorytm kosztu przejazdu na głowę
//jak to zrobic ze zmiennymi tablicowymi dla autobusu 30 osobowego- zastosowanie tablic
// zmienna a1-ile osób
// zmienna a2- ile km
// stała/zmienna a3-spalanie w litrach per 100 km
// stała/zmienna a4-cena paliwa w pln 0.00
// 1-3 osoby- "szerokiej drogi" jada cztery osoby i wiecej- komunikat- "jestes ekologiczny"
function KosztTransportu(a1,a2,a3,a4,a5,a6){
if (a1==1) {
  cena=a2/100*a3*a4+a5}
  else if (a1==2) {
  cena=a2/100*a3*a4/2+a5}
  else if (a1==3) {
  cena=a2/100*a3*a4/3+a5}
  else if (a1==4) {
  cena=a2/100*a3*a4/4+a6}
  else if (a1==5) {
  cena=a2/100*a3*a4/5+a6}
  else {
  cena="za maly samochod"}
  

  console.log(cena)
  }
  KosztTransportu(4,500,8,6.20,"szerokiej drogi","jesteś eko")



  //const spalania a3 const spalanie = ["10", "8", "6"];
  