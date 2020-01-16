//codigo retirado do github: https://github.com/fmoreirati/tamagoshi.git
var nome = "";
var saude = 100;
var fome = 100;
var tempo = 0;

setInterval(display, 2000); //1000 = 1seg
display()

function display() {
    tempo++ //tempo = tempo + 1
    if (tempo >= 4) dano()
    document.getElementById("tempo").innerHTML = "Tempo: " + tempo
    document.getElementById("saude").innerHTML = "Saude: " + saude
    document.getElementById("fome").innerHTML = "Fome: " + fome
    document.getElementById("humor").innerHTML = "Humor: " + humor()
    imagem();
}

function humor() {
    return (fome + saude) /2;
}

function dano() {
    if (fome > 0) {
        fome = fome - 1
    }
    if (saude > 0) {
        saude = saude - 1
    }
}

function comer(valor) {
    if (fome < 100) {
        fome = fome + 10
    }
}

function remedio(valor) {
    if (saude < 100) {
        saude = saude + valor
    }
}

function imagem() {
    let img = "t01.gif";
    if (saude == 0 || fome == 0)
        img = "t07.gif";
    else if (tempo <= 4)
        img = "t01.gif";
    else if (tempo <= 8)
        img = "t02.gif";
    else if (tempo <= 16)
        img = "t03.gif";
    else if (tempo <= 32)
        img = "t05.gif";
    else if (tempo <= 64)
        img = "t06.gif";

    document.getElementById("foto").src = "img/" + img;
}