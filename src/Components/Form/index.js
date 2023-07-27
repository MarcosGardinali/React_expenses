import { useState } from 'react';
import Button from '../Button';
import Camps from '../Camps';
import './Form.css';
import { v4 as uuidv4 } from 'uuid';
import { criarNovaDespesa, limparEstados } from './helperFunctions'; // Importa as funções do arquivo helpers.js


function Form(props) {
    // Utilização do hook useState para criar os estados 'descricao', 'valor' e 'tipo',
    // e as funções para atualizar esses estados.
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');

    function aoSalvar(evento) {
        evento.preventDefault();
    
        // Utilize a função criarNovaDespesa para criar o novo objeto de despesa.
        const novaDespesa = criarNovaDespesa(descricao, valor, tipo, uuidv4());
    
        // Chama a função 'aNovaDespesaAdicionada' (passada como prop) com o novo objeto de despesa.
        props.aNovaDespesaAdicionada(novaDespesa);
    
        // Utilize a função limparEstados para limpar os estados após a submissão do formulário.
        limparEstados(setDescricao, setValor, setTipo);
      }

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
                type="number"
                placeholder="Insira um valor"
                valor={valor}
                aoAlterado={valor => setValor(valor)}
                centavos="0.01"
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

export default Form;
