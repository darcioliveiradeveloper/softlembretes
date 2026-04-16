// Sistema de lembretes - Darci, Dion, Lucas

let lembretes = [];

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
      5. Pendentes
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

// EDITAR feito por Darci e Dion, Lucas ajudou a corrigir bugs
function editar() {
  if (lembretes.length === 0) {
    console.log("Nada para editar.");
    return exibirMenu();
  }
listar();
  //lembretes.forEach((l, i) => console.log(`${i} - ${l.lembrete}`));

  rl.question("Digite o índice do lembrete que deseja editar: ", (indice) => {
    const i = parseInt(indice);
    if (i >= 0 && i < lembretes.length) {
      rl.question("Novo texto (ou Enter para manter): ", (novoTexto) => {
        rl.question("Novo prazo (ou Enter para manter): ", (novoPrazo) => {
          rl.question("Concluído? (s/n): ", (status) => {
            if (novoTexto) lembretes[i].lembrete = novoTexto;
            if (novoPrazo) lembretes[i].prazo = novoPrazo;
            if (status.toLowerCase() === "s") lembretes[i].concluido = true;
            if (status.toLowerCase() === "n") lembretes[i].concluido = false;

            console.log("Lembrete atualizado!");
            exibirMenu();
          });
        });
      });
    } else {
      console.log("Índice inválido.");
      exibirMenu();
    }
  });
}

// Excluir feito por Dion
function excluir() {
  if (lembretes.length === 0) {
    console.log("Lista vazia.");
    return exibirMenu();
  }
listar();
 // lembretes.forEach((l, i) => {
   //   console.log(
     //   `${i} - [${l.concluido ? "X" : " "}] ${l.lembrete} (Prazo: ${l.prazo})`,
  rl.question("Digite o índice do lembrete que deseja excluir: ", (indice) => {
    const i = parseInt(indice);

    if (i >= 0 && i < lembretes.length) {
      lembretes.splice(i, 1);
      console.log("Lembrete excluído com sucesso!");
    } else {
      console.log("Índice inválido.");
    }
    exibirMenu();
  });
}

// terminando pendentes por Darci e Lucas
function pendentes() {
  console.log("\n--- APENAS PENDENTES ---");
  const listaPendentes = lembretes.filter((l) => !l.concluido);

  if (listaPendentes.length === 0) {
    console.log("Tudo em dia! Nenhuma pendência.");
  } else {
    listaPendentes.forEach((l) => {
      console.log(`- ${l.lembrete} (Prazo: ${l.prazo})`);
    });
  }
  exibirMenu();
}

exibirMenu();
