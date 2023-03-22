// const minhaPromise = new Promise((resolve, reject) => {
//     const nome = 'Ericsson';

//     if (nome === 'Andre') {
//         resolve('o usuario Andre foi encontrado.')
//     } else {
//         reject('o usuario Andre não foi encontrado.')
//     }
// })

// minhaPromise.then((dado) => {
//     console.log(dado);
// })

// const minhaPromise2 = new Promise((resolve, reject) => {
//     const nome = 'Ericsson';

//     if (nome === 'Andre') {
//         resolve('o usuario Andre foi encontrado.')
//     } else {
//         reject('o usuario Andre não foi encontrado.')
//     }
// })

// minhaPromise2.then((dado) => {
//     return dado.toUpperCase();
// }).then((dadoModificado) => {
//     console.log(dadoModificado);
// })

const minhaPromise3 = new Promise((resolve, reject) => {
    const nome = 'Andre';

    if (nome === 'Andre') {
        resolve('o usuario Andre foi encontrado.')
    } else {
        reject('o usuario Andre não foi encontrado.')
    }
})

minhaPromise3.then((dado) => {
    console.log(dado);
    alert('parabéns! ' + dado)
}).catch((erro) => {
    console.log('aconteceu um erro: ' + erro);
    alert('aconteceu um erro:' + erro)
})