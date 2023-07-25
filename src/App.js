import Header from "./Components/Header";
import Form from "./Components/Form"
import List from "./Components/List";
import { useState } from "react";

function App() {
  const [despesas, setDespesas] = useState([])

  function aNovaDespesaAdicionada(despesa) {
    setDespesas([...despesas, despesa])
  }

  const exluirDespesas = (id) => {
    const novasDespesas = despesas.filter((despesa) => despesa.id !== id);
    setDespesas(novasDespesas);
  };



  return (
    <div className="App">
      <Header />
      <Form
        aNovaDespesaAdicionada={despesa => aNovaDespesaAdicionada(despesa)}
        excluirDespesa={exluirDespesas}
      />
      <List
        despesa={despesas}
      />
    </div>
  );
}

export default App;
