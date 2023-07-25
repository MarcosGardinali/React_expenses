// Importação do hook useState da biblioteca React para gerenciar estado na função Form.
import { useState } from 'react';

// Importação do componente Button e Camps de seus respectivos arquivos.
import Button from '../Button';
import Camps from '../Camps';

// Importação do arquivo de estilos "Form.css".
import './Form.css';

// Importação da função v4 da biblioteca uuid para gerar IDs únicos para as despesas.
import { v4 as uuidv4 } from 'uuid';

// Definição do componente funcional Form, que recebe um objeto 'props' como argumento.
function Form(props) {
    // Utilização do hook useState para criar os estados 'descricao', 'valor' e 'tipo',
    // e as funções para atualizar esses estados.
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');

    // Função que é chamada quando o formulário é submetido.
    function aoSalvar(evento) {
        // Previne o comportamento padrão de submissão do formulário.
        evento.preventDefault();
        // Chama a função 'aNovaDespesaAdicionada' (passada como prop) com um novo objeto de despesa.
        // O objeto contém um ID gerado pela função uuidv4, e os valores dos campos 'descricao', 'valor' e 'tipo'.
        props.aNovaDespesaAdicionada({
            id: uuidv4(),
            descricao,
            valor,
            tipo,
        });
        // Limpa os estados 'descricao' e 'valor' após a submissão do formulário.
        setDescricao('')
        setValor('')
        setTipo('')
    }

    // Retorno do JSX que representa o componente Form.
    return (
        <form className='form' onSubmit={aoSalvar}>
            {/* Renderização do componente Camps para o campo de descrição,
                passando as informações necessárias como props. */}
            <Camps
                nome="Descrição"
                type="text"
                placeholder="Insira uma descrição"
                valor={descricao}
                aoAlterado={valor => setDescricao(valor)}
            />
            {/* Renderização do componente Camps para o campo de valor,
                passando as informações necessárias como props. */}
            <Camps
                nome="Valor"
                type="text"
                placeholder="Insira um valor"
                valor={valor}
                aoAlterado={valor => setValor(valor)}
            />
            {/* Renderização do componente Camps para o campo de tipo (radio button),
                passando as informações necessárias como props. */}
            <Camps
                nome="Tipo"
                type="radio"
                options={['Entrada', 'Saída']}
                valor={tipo}
                aoAlterado={valor => setTipo(valor)}
            />
            {/* Renderização do componente Button com o texto "Adicionar" dentro do botão. */}
            <Button>Adicionar</Button>
        </form>
    );
}

// Exportação do componente Form para que possa ser utilizado em outros arquivos.
export default Form;
