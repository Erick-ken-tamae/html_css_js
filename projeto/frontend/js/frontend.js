const protocolo = "http://";
const baseURL = "localhost:3000";

async function obtemFilmes() {
  const filmesEndpoint = "/filmes";
  const URLcompleta = `${protocolo}${baseURL}${filmesEndpoint}`;
  const filmes = (await axios.get(URLcompleta)).data;
  let tabela = document.querySelector(".filmes");
  //posicionar sobre o corpo da tabela pela sua tag
  let corpoTabela = tabela.getElementsByTagName("tbody")[0];
  //para cada filme na lista de filmes, criar uma linha nova
  for (let filme of filmes) {
    let linha = corpoTabela.insertRow(0);
    let celulaTitulo = linha.insertCell(0);
    let celulaSinopse = linha.insertCell(1);
    celulaTitulo.innerHTML = filme.titulo;
    celulaSinopse.innerHTML = filme.sinopse;
  }
}

async function cadastrarFilme() {
  const filmesEndpoint = "/filmes";
  //montar a URL
  const URLcompleta = `${protocolo}${baseURL}${filmesEndpoint}`;
  //pegar os dados que o usuário digitou
  let tituloInput = document.querySelector("#tituloInput");
  let sinopseInput = document.querySelector("#sinopseInput");
  let titulo = tituloInput.value;
  let sinopse = sinopseInput.value;
  if (titulo && sinopse) {
    //limpa as caixinhas de input
    tituloInput.value = "";
    sinopseInput.value = "";
    //requisição post para o back, que devolve a lista de filmes atualizada
    const filmes = (await axios.post(URLcompleta, { titulo, sinopse })).data;
    //limpa o corpo da tabela
    let tabela = document.querySelector(".filmes");
    let corpoTabela = tabela.getElementsByTagName("tbody")[0];
    corpoTabela.innerHTML = "";
    //remontando a tabela
    for (let filme of filmes) {
      let linha = corpoTabela.insertRow(0);
      let celulaTitulo = linha.insertCell(0);
      let celulaSinopse = linha.insertCell(1);
      celulaTitulo.innerHTML = filme.titulo;
      celulaSinopse.innerHTML = filme.sinopse;
    }
    exibirAlerta('.alert-filme', 'Filme cadastrado com sucesso', ['show',
    'alert-success'], ['d-none'], 2000)
      
  }
  else {
    exibirAlerta('.alert-filme', 'Preencha todos os campos', ['show',
      'alert-danger'], ['d-none'], 2000)
  }
}
async function cadastrarUsuario() {
  let usuarioCadastroInput = document.querySelector('#usuarioCadastroInput')
  let passwordCadastroInput = document.querySelector('#passwordCadastroInput')
  let usuarioCadastro = usuarioCadastroInput.value
  let passwordCadastro = passwordCadastroInput.value
  if (usuarioCadastro && passwordCadastro) {
    try {
      const cadastroEndpoint = '/signup'
      const URLCompleta = `${protocolo}${baseURL}${cadastroEndpoint}`
      await axios.post(URLCompleta, {
        login: usuarioCadastro, password:
          passwordCadastro
      })
      usuarioCadastroInput.value = ""
      passwordCadastroInput.value = ""
      exibirAlerta('.alert-modal-cadastro', "Usuário cadastrado com sucesso!",
        ['show', 'alert-success'], ['d-none', 'alert-danger'], 2000)
        ocultarModal('#modalLogin', 2000)
    }
    catch (error) {
      exibirAlerta('.alert-modal-cadastro', "Erro ao cadastrar usuário", ['show',
        'alert-danger'], ['d-none', 'alert-success'], 2000)
        ocultarModal('#modalLogin', 2000)
    }
  }
  else {
    exibirAlerta('.alert-modal-cadastro', 'Preencha todos os campos', ['show',
      'alert-danger'], ['d-none', 'alert-success'], 2000)
  }
}

function ocultarModal(seletor, timeout){
  setTimeout(() => {
    let modal = boodstrap.Modal.getInstance(document.querySelector(seletor))
    modal.hide()
  }, timeout)
}


async function fazerLogin() {
  const login = document.getElementById("usuarioLoginInput").value;
  const password = document.getElementById("passwordLoginInput").value;

  if (!login || !password) {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    const resposta = await axios.post("http://localhost:3000/login", {
      login: login,
      password: password
    });

    const token = resposta.data.token;
    localStorage.setItem("token", token);

    alert("Login realizado com sucesso!");
    console.log("Token:", token);
  } catch (erro) {
    console.error(erro);
    alert("Usuário ou senha inválidos!");
  }
}