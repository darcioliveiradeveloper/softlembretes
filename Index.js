const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
})


const dados =[]
rl.question("Digite seu lembrete: ", (input1) => {
        rl.question("Digite seu prazo: ", (input2) => {
        const tempo = (input2)
             rl.question("Digite a situação da tarefa: ", (input3) => {
             const conclusao = (input3)
            
                const produto1 = {
                    lembrete: input1,
                    resultado: conclusao,
                    prazo: tempo,
                }
                dados.push(produto1)
                console.log(dados)
                  rl.close()
             })  
        })
            })
