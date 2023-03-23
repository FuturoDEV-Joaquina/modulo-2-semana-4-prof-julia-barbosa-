//SETTIMEOUT

function exibirMensagem(){
    alert('infelizmente, hoje é nossa última aula.')
}

// const myTimeOut = setTimeout(welcome, 4000)

// function welcome(){
//     alert('Olá, alunos.')
// }

// function pararTimeOut(){
//     clearTimeout(myTimeOut)
// }

// function clicaAqui(){
//     console.log('Olá, sou um exemplo de de SetInterval.')
// }

function myTimer(){
    const date = new Date();
    document.getElementById("hora").innerHTML = date.toLocaleTimeString();
}

myTimer();

let pararHora = setInterval(myTimer ,1000);

setInterval(ola, 3000)

function ola(){
    document.getElementById("ola").innerHTML += "Hello " ;
}