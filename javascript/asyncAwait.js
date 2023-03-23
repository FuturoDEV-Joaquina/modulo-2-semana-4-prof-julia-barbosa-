function primeiraFuncao(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('esperou a promise ser executada')
            resolve()
        }, 5000)
    })
}

async function segundaFuncao(){
    console.log('inicou')

    await primeiraFuncao()

    alert('depois terminou')
}

segundaFuncao()

function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`) //o fetch recurso que faz requisições assincronas
    .then((data) => data.json()) //recebo um texto e transformo em json
    .catch((err) => console.log('aconteceu algo de errado' + err))
}

async function showUserName(id){
    try {
        const user = await getUser(id)
        console.log(`o nome de usuario é:${user.data.first_name}`)
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

showUserName(1);

