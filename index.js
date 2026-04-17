// Sistema de lembretes - Criado por Darci, Dion, Lucas

let lembretes = [];

const { log } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menu criado por Darci
function exibirMenu() {
  console.log(`
      ---------- MENU ----------
      1. Adicionar Lembrete
      2. Listar Lembretes
      3. Editar Lembrete
      4. Excluir Lembrete
      5. Lembretes Pendentes
      6. Sair
      `);
  pergunta();
}

// switch feito por Darci
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
        pendentes();
        break;
      case "6":
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

// Adicionar feito por Lucas
function Adicionar() {
  rl.question("Digite seu lembrete: ", (input1) => {
    rl.question("Digite seu prazo: ", (input2) => {
      lembretes.push({
        lembrete: input1,
        concluido: false,
        prazo: input2,
      });
      console.log("Lembrete adicionado com sucesso!");
      rl.question("Deseja adicionar outro lembrete? (s/n): ", (resposta) => {
        if (resposta === "s") {
          Adicionar();
        } else {
          exibirMenu();
        }
      });
    });
  });
}

// Listar feito por Dion
function listar() {
  console.log("\n--- TODOS OS LEMBRETES ---");
  if (lembretes.length === 0) {
    console.log("Nenhum lembrete cadastrado.");
  } else {
    lembretes.forEach((l, i) => {
      console.log(
        `${i} - [${l.concluido ? "X" : " "}] ${l.lembrete} (Prazo: ${l.prazo})`,
      );
    });
  }
  exibirMenu();
}

// Feito por Darci e Lucas
function listar2() {
  if (lembretes.length === 0) {
    console.log("Nenhum lembrete cadastrado.");
  } else {
    lembretes.forEach((l, i) => {
      console.log(
        `${i} - [${l.concluido ? "X" : " "}] ${l.lembrete} (Prazo: ${l.prazo})\n`,
      );
    });
  }
}

// EDITAR feito por Darci e Dion, Lucas ajudou a corrigir bugs
function editar() {
  if (lembretes.length === 0) {
    console.log("Nada para editar.");
    return exibirMenu();
  }

  console.log("\n--- EDITAR LEMBRETE ---");
  listar2();

  rl.question("Digite o índice do lembrete que deseja editar (ou 'sair'): ", (indice) => {
    if (indice.trim().toLowerCase() === "sair") return exibirMenu();

    const i = parseInt(indice);

    // Validação do índice
    if (isNaN(i) || i < 0 || i >= lembretes.length) {
      console.log("Erro: Índice inválido.");
      return exibirMenu();
    }

    console.log(`Editando: "${lembretes[i].lembrete}"`);
    
    // Coleta as novas informações
    rl.question("Novo texto (ou pressione Enter para manter): ", (novoTexto) => {
      rl.question("Novo prazo (ou pressione Enter para manter): ", (novoPrazo) => {
        rl.question("Marcar como concluído? (s/n): ", (status) => {
          
          // Confirmação final antes de salvar as alterações
          rl.question("Confirmar a edição? (s/n): ", (confirmacao) => {
            if (confirmacao.toLowerCase() === "s") {
              if (novoTexto.trim() !== "") lembretes[i].lembrete = novoTexto;
              if (novoPrazo.trim() !== "") lembretes[i].prazo = novoPrazo;
              
              if (status.toLowerCase() === "s") lembretes[i].concluido = true;
              else if (status.toLowerCase() === "n") lembretes[i].concluido = false;

              console.log("Sucesso: Lembrete atualizado!");
            } else {
              console.log("Operação de edição cancelada.");
            }
            exibirMenu();
          });
        });
      });
    });
  });
}





// Excluir feito por Dion
function excluir() {
  if (lembretes.length === 0) {
    console.log("Lista vazia.");
    return exibirMenu();
  }
  console.log("\n--- EXCLUIR LEMBRETE ---");
  listar2();

  rl.question(
    "Digite o índice do lembrete que deseja excluir (ou 'sair'): ",
    (indice) => {
      if (indice.trim().toLowerCase() === "sair") return exibirMenu();

      const i = parseInt(indice);

      if (isNaN(i) || i < 0 || i >= lembretes.length) {
        console.log("Erro: Índice inválido.");
        return exibirMenu();
      }

      rl.question(
        `Confirmar Exclusão de "${lembretes[i].lembrete}"? (s/n): `,
        (resposta) => {
          if (resposta.toLowerCase() === "s") {
            lembretes.splice(i, 1);
            console.log("Sucesso: Lembrete excluído!");
          } else {
            console.log("Operação cancelada.");
          }
          exibirMenu();
        },
      );
    },
  );
}

// terminando pendentes por Darci e Lucas
function pendentes() {
  console.log("\n--- LEMBRETES PENDENTES ---");

  const temPendentes = lembretes.some((l) => !l.concluido);

  if (!temPendentes) {
    console.log("Tudo em dia! Nenhuma pendência.");
    return exibirMenu();
  }
  lembretes.forEach((l, i) => {
    if (!l.concluido) {
      console.log(`${i} - [ ] ${l.lembrete} (Prazo: ${l.prazo})\n`);
    }
  });

  rl.question(
    "\nDigite o índice do lembrete para concluir (ou 'sair'): ",
    (indice) => {
      if (indice.trim().toLowerCase() === "sair") return exibirMenu();

      const i = parseInt(indice);

      if (!isNaN(i) && lembretes[i] && !lembretes[i].concluido) {
        rl.question(
          `Confirmar conclusão de "${lembretes[i].lembrete}"? (s/n): `,
          (resposta) => {
            if (resposta.toLowerCase() === "s") {
              lembretes[i].concluido = true;
              console.log("Sucesso: Lembrete atualizado!");
            } else {
              console.log("Operação cancelada.");
            }
            exibirMenu();
          },
        );
      } else {
        console.log("Índice inválido ou lembrete já concluído.");
        exibirMenu();
      }
    },
  );
}

exibirMenu();
