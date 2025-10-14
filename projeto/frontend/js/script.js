const protocolo = "http://";        //protocolo
const baseURL =  "localhost:3000";  //porta:3000
const filmEndpoint = "/filmes";    

async function obtemFilmes(){
    const URLCompleta = `${protocolo}${baseURL}${filmEndpoint}`;
    const filmes = (await axios.get(URLCompleta)).data;
    //console.log(filmes)
    let tabela = document.querySelector('.filmes');
    let corpoTabela = tabela.getElementsByTagName('tbody')[0];
    //para cada filme, criar uma nova linha 
    for(let filme of filmes ){
        //a inserção da linha será no início, poderia ser no fim (sem argumento)
        let linha = corpoTabela.insertRow(0)
        let celulaTitulo = linha.insertCell(0)
        let celulaSinopse = linha.insertCell(1)
        celulaTitulo.innerHTML = filme.titulo
        celulaSinopse.innerHTML = filme.sinopse 
    }
 }
