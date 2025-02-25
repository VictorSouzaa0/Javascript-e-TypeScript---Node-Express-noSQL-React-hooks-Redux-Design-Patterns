// async function obterUsuario() {
//     try {
//       let url = "https://jsonplaceholder.typicode.com/users/1"; // Endpoint da API
//       let resposta = await fetch(url); // Espera a resposta da requisição
  
//       if (!resposta.ok) {
//         throw new Error("Erro ao buscar os dados do usuário");
//       }
  
//       let usuario = await resposta.json(); // Converte a resposta para JSON
//       let nome = usuario.name; // Armazena o nome do usuário
//       let email = usuario.email; // Armazena o email do usuário
  
//       console.log(`Nome: ${nome}`);
//       console.log(`Email: ${email}`);
//     } catch (erro) {
//       console.log("Erro ao obter usuário:", erro); // Se ocorrer algum erro, entra aqui
//     }
//   }
  
//   obterUsuario();
  