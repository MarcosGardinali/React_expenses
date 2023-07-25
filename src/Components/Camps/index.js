// Importação do arquivo de estilos "Camps.css".
import './Camps.css';

// Definição do componente funcional Camps, que recebe um objeto 'props' como argumento.
function Camps(props) {
  // Desestruturação do objeto 'props' para obter as seguintes propriedades:
  const { nome, type, options, placeholder, valor, aoAlterado } = props;

  // Função que é chamada sempre que o conteúdo do campo de entrada é alterado.
  function aoDigitado(evento) {
    // Chama a função 'aoAlterado' (passada como prop) com o valor digitado no campo de entrada.
    aoAlterado(evento.target.value);
  }

  // Verifica se o tipo (type) do campo é 'radio'.
  if (type === 'radio') {
    // Se o tipo for 'radio', renderiza um grupo de botões de rádio.
    return (
      <section className='campo'>
        <label>{nome}</label>
        <div>
          {/* Mapeia cada opção dentro do array 'options' e cria um botão de rádio para cada uma. */}
          {options.map((option) => (
            <label key={option}>
              {/* O input é do tipo 'radio', pertence ao grupo 'nome' e tem valor igual à opção. */}
              <input 
                type="radio" 
                name={nome} 
                value={option}
                // Verifica se o botão de rádio deve ser marcado com base no valor atual (valor) do campo.
                checked={option === valor}
                // Chama a função 'aoAlterado' ao selecionar uma opção de rádio.
                onChange={() => aoAlterado(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </section>
    );
  }

  // Caso o tipo não seja 'radio', renderiza um campo de entrada de texto.
  return (
    <section className='campo'>
      <label>
        {nome}
        {/* O input é do tipo especificado em 'type', com o texto 'placeholder' e o valor 'valor'. */}
        <input 
          type={type} 
          placeholder={placeholder}
          value={valor} 
          // Chama a função 'aoDigitado' sempre que o conteúdo do campo de entrada é alterado.
          onChange={aoDigitado} 
        />
      </label>
    </section>
  );
}

// Exportação do componente Camps para que possa ser utilizado em outros arquivos.
export default Camps;
