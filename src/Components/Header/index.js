import Card from '../Cards'
import './Header.css'
import { BsArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { AiFillDollarCircle } from 'react-icons/ai';


function Header(props){

    const { entradaTotal, saidaTotal } = props;

    return(
        <header className='main__header'>
            <main>
                <h1>Controle Financeiro</h1>
                <section>
                    <Card nome="Entradas" icone={<BsArrowUpCircleFill />} valor={entradaTotal.toFixed(2)}/>
                    <Card nome="Saídas" icone={<BsFillArrowDownCircleFill/>} valor={saidaTotal.toFixed(2)} />
                    <Card nome="Total" icone={<AiFillDollarCircle  size={25} />} valor={(entradaTotal - saidaTotal).toFixed(2)} /> 
                </section>
            </main>         
        </header>
        
    )
}

export default Header