/* Jeito assíncrono (com async/await) — o jeito certo

O garçom anota seu pedido, leva pra cozinha, e vai atender outras mesas enquanto o prato fica pronto. Quando a comida fica pronta, ele volta até você e entrega. */

// async — marca a função como "essa função pode ter esperas dentro dela"

// await — "espera esse resultado chegar, antes de continuar essa linha específica"

/* Os 3 estados de uma Promise: Toda promise está sempre em um desses 3 estados: 

pending (Pendente) | Ainda esperando nem deu certo nem errado 
fulfilled (Cumprida) | Terminou com sucesso, o valor está disponível
rejected (rejeitada) | Terminou com erro, algo deu errado 

*/ 

function buscarUsuario() {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve ({nome: "Leandro", idade: 27})
        }, 2000)
    })
}

async function mostrarUsuario(){
    console.log("Buscando usuário ... ")

    let usuario = await buscarUsuario()

    console.log("Usuário encontrado: ", usuario)
}

mostrarUsuario()
console.log("Esse código aparece depois")




