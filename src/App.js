import Header from "./Components/Header";
import Form from "./Components/Form";
import List from "./Components/List";
import { useState } from "react";

function App() {
  // Utilização do hook useState para criar o estado 'despesas' e a função 'setDespesas'
  // para atualizar esse estado. O estado 'despesas' começa como um array vazio.
  const [despesas, setDespesas] = useState([]);

  // Função que recebe uma nova despesa como argumento e adiciona essa despesa ao estado 'despesas'.
  function aNovaDespesaAdicionada(despesa) {
    // Utilização do spread operator (...) para criar um novo array, copiando todos os elementos
    // do array 'despesas' atual e adicionando a nova 'despesa' no final do array.
    setDespesas([...despesas, despesa]);
  }

  // Função para excluir uma despesa com base no ID fornecido como argumento.
  const excluirDespesas = (id) => {
    // Utilização do método 'filter' para criar um novo array 'novasDespesas',
    // que contém todas as despesas do array 'despesas' atual, exceto aquela com o ID correspondente.
    const novasDespesas = despesas.filter((despesa) => despesa.id !== id);
    // Atualiza o estado 'despesas' com o novo array que exclui a despesa específica.
    setDespesas(novasDespesas);
  };

  // Retorno do JSX que representa o componente App.
  return (
    <div className="App">
      {/* Renderização do componente Header */}
      <Header />
      {/* Renderização do componente Form e passagem da função 'aNovaDespesaAdicionada' como prop. */}
      <Form
        aNovaDespesaAdicionada={(despesa) => aNovaDespesaAdicionada(despesa)}
      />
      {/* Renderização do componente List e passagem do estado 'despesas' e a função 'excluirDespesas' como props. */}
      <List
        despesa={despesas}
        excluirDespesa={excluirDespesas}
      />
    </div>
  );
}

// Exportação do componente App para que possa ser utilizado em outros arquivos.
export default App;
