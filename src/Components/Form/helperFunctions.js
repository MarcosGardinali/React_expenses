// helpers.js

// Função para gerar um novo objeto de despesa com um ID gerado pela função uuidv4.
export function criarNovaDespesa(descricao, valor, tipo, id) {
    return { id, descricao, valor, tipo };
  }
  
  // Função para limpar os estados 'descricao', 'valor' e 'tipo'.
  export function limparEstados(setDescricao, setValor, setTipo) {
    setDescricao('');
    setValor('');
    setTipo('');
  }