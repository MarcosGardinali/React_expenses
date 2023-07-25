import { useState } from 'react'
import Button from '../Button'
import Camps from '../Camps'
import './Form.css'
import { v4 as uuidv4 } from 'uuid';

function Form(props){

    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')
    const [tipo, setTipo] = useState('')

    function aoSalvar(evento){
        evento.preventDefault()
        props.aNovaDespesaAdicionada({
            id: uuidv4(),
            descricao,
            valor, 
            tipo
    })
    console.log(descricao, valor, tipo)
    setDescricao('')
    setValor('')
    }


    return(
        <form className='form' onSubmit={aoSalvar}>
            <Camps 
                nome="Descrição" 
                type="text" 
                placeholder="Insira uma descrição"
                valor={descricao}
                aoAlterado={valor => setDescricao(valor)}
            />
            <Camps 
                nome="Valor" 
                type="text" 
                placeholder="Insira um valor"
                valor={valor}
                aoAlterado={valor => setValor(valor)}
            />
            <Camps 
                nome="Tipo" 
                type="radio" 
                options={['Entrada', 'Saída']} 
            />
            <Button>Adicionar</Button>
        </form>
    )
}

export default Form