import './Expenses.css'
import { BsFillTrashFill } from 'react-icons/bs';


function Expenses(props) {
  return (
    (props.despesa.length > 0) ?
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
          {props.despesa.map((despesa) => (
            <tr key={despesa.id}>
              <td>{despesa.descricao}</td>
              <td>{despesa.valor}</td>
              <td>{despesa.tipo}</td>
              <td>
                <BsFillTrashFill onClick={() => props.excluirDespesa(despesa.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>: ""
  ) 
}

export default Expenses