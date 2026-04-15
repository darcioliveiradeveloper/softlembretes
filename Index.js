// vamos fazer aqui um sistema de lembretes, 
// onde o usuário pode criar, editar e excluir lembretes,
// e os lembretes serão armazenados em um array de objetos.    

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