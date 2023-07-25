import './Camps.css'

function Camps(props){
    const { nome, type, options, placeholder, valor, aoAlterado } = props;

    function aoDigitado(evento){
      aoAlterado(evento.target.value)
  }
    
    if (type === 'radio') {
        return (
          <section className='campo'>
            <label>{nome}</label>
            <div>
              {options.map((option) => (
                <label key={option}>
                  <input type="radio" name={nome} value={option} />
                  {option}
                </label>
              ))}
            </div>
          </section>
        );
      }
    
      return (
        <section className='campo'>
          <label>
            {nome}
            <input 
              type={type} 
              placeholder={placeholder}
              value={valor} 
              onChange={aoDigitado} 
            />
          </label>
        </section>
      );
    }
    
    export default Camps;