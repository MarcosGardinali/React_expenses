import './Expenses.css';
import { BsArrowUpCircleFill, BsFillArrowDownCircleFill, BsFillTrashFill } from 'react-icons/bs';

function Expenses(props) {
  // Verifica se a propriedade 'despesa' (array de despesas) possui elementos.
  // Caso tenha, renderiza a seção com a tabela de despesas, caso contrário, não renderiza nada.
  return (
    (props.despesa.length > 0) ? (
      <section className='expenses'>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Tipo</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapeia cada despesa dentro do array 'despesa' e cria uma linha da tabela para cada uma. */}
            {props.despesa.map((despesa) => (
              <tr key={despesa.id}>
                <td>{despesa.descricao}</td>
                <td>R${despesa.valor}</td>
                <td>
                  {despesa.tipo === 'Saída' ? (
                    <BsFillArrowDownCircleFill />
                  ) : (
                    <BsArrowUpCircleFill />
                  )}
                </td>
                <td>
                  {/* Renderiza o ícone de lixeira preenchida e associa a função 'excluirDespesa'
                      passada como prop, para ser chamada quando o ícone for clicado. */}
                  <BsFillTrashFill onClick={() => props.excluirDespesa(despesa.id, despesa.tipo, despesa.valor)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    ) : (
      // Caso o array de despesas esteja vazio, retorna uma string vazia.
      // Isso garante que a seção não seja renderizada caso não haja despesas a serem exibidas.
      ""
    )
  );
}

export default Expenses;
