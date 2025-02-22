// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

// Adiciona um ouvinte de evento para o submit do formulário
form.addEventListener('submit', function (e) {
  // Impede o envio padrão do formulário (recarregar a página)
  e.preventDefault();

  // Seleciona os campos de peso e altura dentro do formulário
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  // Converte os valores dos campos para números
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // Validação: Verifica se o peso é válido
  if (!peso) {
    // Se o peso não for válido, exibe a mensagem de erro
    setResultado('Peso inválido', false);
    return; // Interrompe a execução do código
  }

  // Validação: Verifica se a altura é válida
  if (!altura) {
    // Se a altura não for válida, exibe a mensagem de erro
    setResultado('Altura inválida', false);
    return; // Interrompe a execução do código
  }

  // Calcula o IMC chamando a função getImc
  const imc = getImc(peso, altura);

  // Obtém o nível do IMC chamando a função getNivelImc
  const nivelImc = getNivelImc(imc);

  // Cria uma mensagem com o IMC e o nível
  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  // Exibe o resultado chamando a função setResultado com a mensagem e validando como "true"
  setResultado(msg, true);
});

// Função para calcular o nível do IMC com base no valor calculado
function getNivelImc(imc) {
  // Cria um array com as classificações dos níveis de IMC
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  // Verifica em qual faixa o IMC se encontra e retorna o nível correspondente
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

// Função para calcular o IMC com base no peso e altura
function getImc(peso, altura) {
  // Calcula o IMC usando a fórmula peso / altura²
  const imc = peso / altura ** 2;

  // Retorna o IMC com 2 casas decimais
  return imc.toFixed(2);
}

// Função para criar um novo elemento <p> no DOM
function criaP() {
  const p = document.createElement('p');
  return p;
}

// Função para exibir o resultado na tela
function setResultado(msg, isValid) {
  // Seleciona o elemento onde o resultado será exibido
  const resultado = document.querySelector('#resultado');

  // Limpa o conteúdo do resultado antes de adicionar um novo parágrafo
  resultado.innerHTML = '';

  // Cria um novo parágrafo
  const p = criaP();

  // Se o resultado for válido, adiciona a classe 'paragrafo-resultado', senão adiciona 'bad'
  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  // Define o conteúdo do parágrafo como a mensagem passada
  p.innerHTML = msg;

  // Adiciona o parágrafo dentro do elemento resultado
  resultado.appendChild(p);
}
