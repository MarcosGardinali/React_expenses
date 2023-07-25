import Card from '../Cards'
import './Header.css'
import { BsArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { AiFillDollarCircle } from 'react-icons/ai';


function Header(){
    return(
        <header className='main__header'>
            <main>
                <h1>Controle Financeiro</h1>
                <section>
                    <Card nome="Entradas" icone={<BsArrowUpCircleFill />} valor="2000,00"/>
                    <Card nome="Saídas" icone={<BsFillArrowDownCircleFill/>} valor="500,00" />
                    <Card nome="Total" icone={<AiFillDollarCircle  size={20} />} valor="1500,00" /> 
                </section>
            </main>         
        </header>
        
    )
}

export default Header