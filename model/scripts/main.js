// const ajax = obj => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//         if(xhr.status >=  200 && xhr.status < 300){
//             obj.success(xhr.responseText);
//         }else{
//             obj.error(xhr.statusText)
//         }
//     })
// }
// document.addEventListener('click', e =>{
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();

//     if (tag === 'a') {
//         e.preventDefault()
//         loadPage(el);
//     }
// })

// function loadPage(el){
//     const href = el.getAttribute('href')
//     console.log(href)
// }

// Função que realiza uma requisição HTTP usando XMLHttpRequest e retorna uma Promise
const request = obj => { 
    return new Promise((resolve, reject) => { 
      // Criando uma nova instância do objeto XMLHttpRequest
      const xhr = new XMLHttpRequest(); 
  
      // Configurando a requisição com o método e a URL passados no objeto 'obj'
      // O terceiro parâmetro 'true' indica que a requisição será assíncrona
      xhr.open(obj.method, obj.url, true); 
  
      // Enviando a requisição para o servidor
      xhr.send(); 
  
      // Adicionando um ouvinte de evento para a requisição (quando ela carregar)
      xhr.addEventListener('load', () => { 
        // Se o status da resposta estiver entre 200 e 299, a requisição foi bem-sucedida
        if(xhr.status >= 200 && xhr.status < 300) {
          // Resolve a Promise com o conteúdo da resposta (responseText)
          resolve(xhr.responseText);
        } else {
          // Se houver erro, rejeita a Promise com o status do erro
          reject(xhr.statusText);
        }
      });
    });
  };
  
  // Adicionando um evento de clique para toda a página
  document.addEventListener('click', e => { 
    // Obtendo o elemento que foi clicado
    const el = e.target; 
  
    // Obtendo o nome da tag do elemento clicado e convertendo para minúsculas
    const tag = el.tagName.toLowerCase(); 
  
    // Verificando se o elemento clicado é um link (<a>)
    if (tag === 'a') { 
      e.preventDefault(); // Previne o comportamento padrão do link (não recarrega a página)
      carregaPagina(el); // Chama a função para carregar a página dinamicamente
    }
  });
  
  // Função assíncrona para carregar o conteúdo da página clicada sem recarregar a página
  async function carregaPagina(el) { 
    // Obtendo o atributo 'href' do link clicado
    const href = el.getAttribute('href'); 
  
    // Criando um objeto de configuração da requisição HTTP
    const objConfig = {
      method: 'GET', // Método HTTP GET para buscar os dados
      url: href // URL que será acessada
    };
  
    try {
      // Fazendo a requisição com a função 'request' e aguardando a resposta
      const response = await request(objConfig); 
  
      // Chamando a função para exibir o resultado na página
      carregaResultado(response); 
    } catch(e) {
      // Caso ocorra um erro na requisição, exibe no console
      console.log(e);
    }
  }
  
  // Função para exibir a resposta da requisição na página
  function carregaResultado(response) { 
    // Selecionando o elemento com a classe 'resultado' na página
    const resultado = document.querySelector('.result'); 
  
    // Definindo o conteúdo da div '.resultado' com a resposta da requisição
    resultado.innerHTML = response; 
  }
  