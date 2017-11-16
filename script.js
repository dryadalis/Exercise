
// USTAWIENIE DATY
function counting (){
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    
    let hour = today.getHours();
    if (hour < 10)hour = "0" + hour
    let minut = today.getMinutes();
    if(minut < 10)minut = "0" + minut
    let sec = today.getSeconds();
    if (sec < 10)sec = "0" + sec
    
    document.getElementById("zegar").innerHTML = day + "/"+ month + "/" + year + "|" + hour + ":"+ minut + ":" + sec;
    setTimeout("counting()", 1000);
}
// SPRAWDŹ LICZBĘ

function check() {
    let number = document.getElementById("pole").value;
    if (number > 0) {
        document.getElementById("score").innerHTML = "dodatnia"; 
    } else if (number < 0) {
        document.getElementById("score").innerHTML = "ujemna";
    } else if (number == 0) {
        document.getElementById("score").innerHTML = "zero";
    } else { 
        document.getElementById("score").innerHTML = "to nie jest liczba!"
    }
}
 // WYPISYWANIE LICZB Z PRZEDZIAŁU
function wypisz() 
{
    let liczba1 = document.getElementById("pole1").value;
    let liczba2 = document.getElementById("pole2").value;
    let napis = "";
    let nottrue = "To nie są liczby!";
    let right = "Wartość w prawym polu nie jest liczbą!";
    let left = "Wartość w lewym polu nie jest liczbą";
    liczba1 = parseInt(liczba1, 10);
    liczba2 = parseInt(liczba2, 10)
    if (liczba1 > liczba2) {
        for(i=liczba1; i >= liczba2; i--){
            napis = napis + i + " "
            document.getElementById("wynik").innerHTML = napis;
        }
    } else if (liczba1 < liczba2) {
        for(i=liczba1; i<=liczba2;i++){
            napis = napis + i + " "
            document.getElementById("wynik").innerHTML = napis;
        }
    } else if (liczba1 == liczba2){
        document.getElementById("wynik").innerHTML = "Te liczby są równe!";
    } else if (liczba1 === NaN) {
        document.getElementById("wynik").innerHTML = left;
    } else if (liczba2 === NaN) {
        document.getElementById("wynik").innerHTML = right;
    } else {
        document.getElementById("wynik").innerHTML = nottrue;
    }
}

//SLAIDER
let numer = Math.floor(Math.random() * 5) + 1;
let timer1 = 0;
let timer2 = 0;

function ustawslajd(nrslajdu){
clearTimeout(timer1);
clearTimeout(timer2);
numer = nrslajdu - 1;
schowej();
setTimeout("zmienslaid()", 5000);
}

function schowej() {
    $("#slaider").fadeOut(500);

}

function zmienslaid() {
    numer++; if(numer > 5) numer = 1;
    let plik = "<img src=\"slajdy/slajd" + numer + ".png\"/>"
    document.getElementById("slaider").innerHTML = plik;
    $("#slaider").fadeIn(500);
    

    timer1 = setTimeout("zmienslaid()", 5000);
    timer2 = setTimeout("schowej()",4500);
}
