//ESCOPO GLOBAL

let nome = 'julia';
let idade = 22;

function dados(){
    //ESCOPO LOCAL
    let numero = 10;
    console.log(numero)
    console.log("nome: ", nome)
    console.log("idade: ", idade)
}

//console.log("numero: ", numero)

dados();