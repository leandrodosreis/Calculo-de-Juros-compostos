const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o nome do cliente: ', function(nome){

    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto: ', function(produto){

        let nomeProduto = produto

        entradaDeDados.question('Digite o valor da compra: ', function(capitaInicial){

            let c = capitaInicial

            entradaDeDados.question('Digite a taxa de juros: ', function(taxaDeJuros){

                let i = taxaDeJuros

                entradaDeDados.question('Digite o tempo de pagamento: ', function(tempoDePagamento){

                    let n = tempoDePagamento
                    
                    if(nomeCliente == '' || nomeProduto == '' || c == '' || i == '' || n == ''){
                        console.log('ERRO: Existem campos obrigatorios que não foram preeenchidos')

                    }else if(!isNaN(nomeCliente)){
                        console.log('Erro: somente letras no nome')

                    }else if(isNaN(c) || isNaN(i) || isNaN(n)){
                        console.log('ERRO: Somente numeros são aceitos')

                    }else{

                        let montante = (Number(c) * Number((1 + i)*n))

                        console.log(montante)

                    }

                })

            })

        })

    })
})