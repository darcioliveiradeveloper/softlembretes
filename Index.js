// vamos fazer aqui um sistema de lembretes, onde o usuário pode criar, editar e excluir lembretes.
// Listar lembretes

function listar() {
  if (lembretes.length === 0) {
    console.log("Nenhum lembrete cadastrado.");
  } else {
    lembretes.forEach((l, i) => {
      console.log(`${i} - ${l.lembrete} | Prazo: ${l.prazo} | Concluído: ${l.concluido}`);
    });
  }
}