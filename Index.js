// vamos fazer aqui um sistema de lembretes, onde o usuário pode criar, editar e excluir lembretes.
// Por Darci, Dion, Lucas

// Vetor global de lembretes
let lembretes = [];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Criar menus de entrada por Darci

function exibirMenu() {
    console.log(`
      ---------- MENU ----------
      1. Adicionar Lembrete
      2. Lista Lembretes
      3. Editar Lembrete
      4. Excluir Lembrete
      5. Sair
      `);
    pergunta();
  }

  function pergunta() {
    rl.question("Escolha uma opção: ", (opcao) => {
      switch (opcao) {
        case "1":
          Adicionar();
          break;
        case "2":
          listar();
          break;
        case "3":
          editar();
          break;
        case "4":
          excluir();
          break;
        case "5":
          console.log("Saindo...!");
          rl.close();
          break;
        default:
          console.log("Opção inválida!");
          exibirMenu();
          break;
      }
    });
  }

// Listar lembretes por Dion

function listar() {
  if (lembretes.length === 0) {
    console.log("Nenhum lembrete cadastrado."); exibirMenu();

  } else {
    lembretes.forEach((l, i) => {
      console.log(`${i} - ${l.lembrete} | Prazo: ${l.prazo} | Concluído: ${l.concluido}`);
        exibirMenu();
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


// Adicionar Lembrete por Lucas

function Adicionar () {
  
rl.question("Digite seu lembrete: ", (input1) => {
        rl.question("Digite seu prazo: ", (input2) => {
        const tempo = (input2)
             
            
                const lembrete = {
                    lembrete: input1,
                    concluido: false,
                    prazo: tempo,
                }
                lembretes.push(lembrete)
                console.log("Lembrete adicionado com sucesso!")
                  
                rl.question("Deseja adicionar outro lembrete? (s/n): ", (resposta) => {
                if (resposta === "s") {
                    Adicionar();
                } else {
                    exibirMenu();
                }
             })  
        })
            })}

        
exibirMenu();