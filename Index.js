const readline = require('readline')

    
// vamos fazer aqui um sistema de lembretes, onde o usuário pode criar, editar e excluir lembretes.


// Listar lembretes por Dion

function listar() {
  if (lembretes.length === 0) {
    console.log("Nenhum lembrete cadastrado.");
  } else {
    lembretes.forEach((l, i) => {
      console.log(`${i} - ${l.lembrete} | Prazo: ${l.prazo} | Concluído: ${l.concluido}`);
    });
  }
}


// Excluir lembrete por Dion

function excluir() {
    listar();
    rl.question("Digite o índice do lembrete que deseja excluir: ", (indice) => {
      if (lembretes[indice]) {
        lembretes.splice(indice, 1);
        console.log("Lembrete excluído com sucesso!");
        executar();
      } else {
        console.log("Índice inválido.");
        executar();
      }
    });
  }
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
