import './Camps.css';

function Camps(props) {
  // Desestruturação do objeto 'props' para obter as seguintes propriedades:
  const { nome, type, options, centavos, placeholder, valor, aoAlterado } = props;

  // Função que é chamada sempre que o conteúdo do campo de entrada é alterado.
  function aoDigitado(evento) {
    // Chama a função 'aoAlterado' (passada como prop) com o valor digitado no campo de entrada.
    aoAlterado(evento.target.value);
    const inputValue = evento.target.value;

    // Verifica se o campo é do tipo 'number' e tem um ponto decimal.
    if (type === 'number' && inputValue.includes('.')) {
      // Divide o valor em duas partes: a parte inteira e a parte decimal.
      const [parteInteira, parteDecimal] = inputValue.split('.');

      // Verifica se a parte decimal tem mais de duas casas decimais.
      if (parteDecimal && parteDecimal.length > 2) {
        // Limita o número de casas decimais a duas, truncando o restante.
        const valorFormatado = parseFloat(`${parteInteira}.${parteDecimal.slice(0, 2)}`);
        aoAlterado(valorFormatado.toFixed(2));
        return;
      }
    }

    // Chama a função 'aoAlterado' (passada como prop) com o valor digitado no campo de entrada.
    aoAlterado(inputValue);
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
                required
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
          step={centavos}
          // Chama a função 'aoDigitado' sempre que o conteúdo do campo de entrada é alterado.
          onChange={aoDigitado}
          required
        />
      </label>
    </section>
  );
}

// Exportação do componente Camps para que possa ser utilizado em outros arquivos.
export default Camps;
