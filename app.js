//Projeto: CALCULO DE JUROS COMPOSTOS

//Import da biblioteca de entrada de dados
const readline = require('readline')


const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o nome do cliente: ', function (nome) {

    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto: ', function (produto) {

        let nomeProduto = produto

        entradaDeDados.question('Digite o valor da compra: ', function (capitaInicial) {

            let c = capitaInicial

            entradaDeDados.question('Digite a taxa de juros: ', function (taxaDeJuros) {

                let i = taxaDeJuros

                entradaDeDados.question('Digite (1) para anos ou (2) para meses: ', function(tipoDeTempo){

                    let anos = tipoDeTempo


                    entradaDeDados.question('Digite o tempo de pagamento: ', function (tempoDePagamento) {

                        let n = tempoDePagamento

                        if (nomeCliente == '' || nomeProduto == '' || c == '' || i == '' || n == '') {
                            console.log('ERRO: Existem campos obrigatorios que não foram preeenchidos')

                        } else if (!isNaN(nomeCliente)) {
                            console.log('Erro: somente letras no nome')

                        } else if (isNaN(c) || isNaN(i) || isNaN(n)) {
                            console.log('ERRO: Somente numeros são aceitos')

                        } else if(tipoDeTempo != 2 && tipoDeTempo != 1){
                            console.log("erro")
                            
                        } else {

                            if(anos == 1){
                                    n = n*12
                                }

                            let montante = (Number(c) * Number(1 + i / 100) ** n)

                            let acrescimo = (montante - c)

                            console.log(`****************** [Viva Moda] *******************\nMuito obrigado por realizar a sua  compra conosco Sr(a) ${nomeCliente}.\nA compra do produto ${nomeProduto}, tem um valor de: ${c}.\nA sua compra será parcelada em ${n} vezes e o Sr(a) pagará: ${montante.toFixed(2)}.\nO acréscimo realizado ao valor de: ${c} será de ${acrescimo.toFixed(2)}.\nMuito obrigado por escolher a [Viva Moda].\n*******************************************************`)

                        }
                        entradaDeDados.close()
                    })   
                })
            })

        })

    })
})