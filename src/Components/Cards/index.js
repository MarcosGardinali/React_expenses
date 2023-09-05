import './Cards.css'

function Card(props){
    return(
        <section className='card'>
            <div>
                <header>
                    <h2>{props.nome} {props.icone}</h2>
                </header>
                <footer>
                    <p>R${props.valor}</p>
                </footer> 
            </div>       
        </section>
    )
}

export default Card