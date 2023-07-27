import Header from "./Components/Header";
import Form from "./Components/Form";
import List from "./Components/List";
import { useEffect, useState } from "react";
import { aNovaDespesaAdicionada, excluirDespesas } from "./helperFunctions";


function App() {
  // Utilização do hook useState para criar o estado 'despesas' e a função 'setDespesas'
  // para atualizar esse estado. O estado 'despesas' começa como um array vazio.
  const [despesas, setDespesas] = useState([]);
  const [entradaTotal, setEntradaTotal] = useState(0); // Estado para armazenar o total de entradas
  const [saidaTotal, setSaidaTotal] = useState(0); 

  useEffect(() => {
    // Recuperar as despesas da localStorage ao carregar a página
    const despesasSalvas = localStorage.getItem("despesas");
    if (despesasSalvas) {
      setDespesas(JSON.parse(despesasSalvas));
    }

    // Recuperar os valores de entradaTotal e saidaTotal da localStorage ao carregar a página
    const entradaTotalSalva = localStorage.getItem("entradaTotal");
    if (entradaTotalSalva) {
      setEntradaTotal(parseFloat(entradaTotalSalva));
    }

    const saidaTotalSalva = localStorage.getItem("saidaTotal");
    if (saidaTotalSalva) {
      setSaidaTotal(parseFloat(saidaTotalSalva));
    }
  }, []);


  const adicionarDespesa = (despesa) => {
    aNovaDespesaAdicionada(despesa, setDespesas, despesas, setEntradaTotal, entradaTotal, setSaidaTotal, saidaTotal);
  };

  const handleExcluirDespesa = (id, tipo, valor) => {
    excluirDespesas(id, setDespesas, despesas, setEntradaTotal, entradaTotal, setSaidaTotal, saidaTotal, tipo, valor);
  };

  useState(() => {
    const despesasSalvas = localStorage.getItem("despesas");
    if (despesasSalvas) {
      setDespesas(JSON.parse(despesasSalvas));
    }
  }, []);


  // Retorno do JSX que representa o componente App.
  return (
    <div className="App">
      {/* Renderização do componente Header */}
      <Header entradaTotal={entradaTotal} saidaTotal={saidaTotal} />
      {/* Renderização do componente Form e passagem da função 'aNovaDespesaAdicionada' como prop. */}
      <Form
        aNovaDespesaAdicionada={adicionarDespesa}
      />
      {/* Renderização do componente List e passagem do estado 'despesas' e a função 'excluirDespesas' como props. */}
      <List
        despesa={despesas}
        excluirDespesa={handleExcluirDespesa}
      />
    </div>
  );
}

export default App;
