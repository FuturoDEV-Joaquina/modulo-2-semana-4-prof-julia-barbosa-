class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = idade
    }

    getFullName(){
        console.log(`${this.nome} ${this.sobrenome} ${this.idade}`)
    }

}

let pessoa1 = new Pessoa('Andre', 'Amaro Pereira', 30);
let pessoa2 = new Pessoa('Adriana', 'Shimura', 28);
console.log(pessoa1)
console.log(pessoa2)

pessoa1.getFullName();
pessoa2.getFullName();


class Retangulo{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }

    calcularArea(){
        console.log("a area calculada é: ", this.altura * this.largura);
    }

    static exibirArea(){
        console.log("a altura e a largura são valores necessários para calcular a area.")
    }
}

const retangulo = new Retangulo(20, 10);
console.log(retangulo);
retangulo.calcularArea();
Retangulo.exibirArea();

