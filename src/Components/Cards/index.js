import './Cards.css'

function Card(props){
    return(
        <section className='card'>
            <div>
                <header>
                    <h2>{props.nome}</h2>
                    {props.icone}
                </header>
                <footer>
                    <p>R${props.valor}</p>
                </footer> 
            </div>       
        </section>
    )
}

export default Card