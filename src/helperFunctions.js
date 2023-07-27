// Função que recebe uma nova despesa como argumento e adiciona essa despesa ao estado 'despesas'.
export function aNovaDespesaAdicionada(despesa, setDespesas, despesas, setEntradaTotal, entradaTotal, setSaidaTotal, saidaTotal) {
  // Utilização do spread operator (...) para criar um novo array, copiando todos os elementos
  // do array 'despesas' atual e adicionando a nova 'despesa' no final do array.
  setDespesas([...despesas, despesa]);
  localStorage.setItem("despesas", JSON.stringify([...despesas, despesa]));
  if (despesa.tipo === "Entrada") {
    const novaEntradaTotal = entradaTotal + parseFloat(despesa.valor);
    setEntradaTotal(novaEntradaTotal);
    localStorage.setItem("entradaTotal", novaEntradaTotal);
  } else {
    const novaSaidaTotal = saidaTotal + parseFloat(despesa.valor);
    setSaidaTotal(novaSaidaTotal);
    localStorage.setItem("saidaTotal", novaSaidaTotal);
  }
}

// Função para excluir uma despesa com base no ID fornecido como argumento.
export function excluirDespesas(id, setDespesas, despesas, setEntradaTotal, entradaTotal, setSaidaTotal, saidaTotal, tipo, valor) {
  // Utilização do método 'filter' para criar um novo array 'novasDespesas',
  // que contém todas as despesas do array 'despesas' atual, exceto aquela com o ID correspondente.
  const novasDespesas = despesas.filter((despesa) => despesa.id !== id);
  setDespesas(novasDespesas);
  localStorage.setItem("despesas", JSON.stringify(novasDespesas)); // Atualizar localStorage

  if (tipo === "Entrada") {
    const novaEntradaTotal = entradaTotal - parseFloat(valor);
    setEntradaTotal(novaEntradaTotal);
    localStorage.setItem("entradaTotal", novaEntradaTotal);
  } else {
    const novaSaidaTotal = saidaTotal - parseFloat(valor);
    setSaidaTotal(novaSaidaTotal);
    localStorage.setItem("saidaTotal", novaSaidaTotal);
  }
}