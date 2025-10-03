// ========================
// DECLARAÇÃO DE VETORES
// ========================

// Criação de um vetor vazio
let v1 = []

// Adicionando elementos manualmente
v1[0] = 2       // adiciona o número 2 na posição 0
v1[10] = -7.5   // adiciona o número -7.5 na posição 10 (vai criar espaços vazios entre)
v1[3] = 'abc'   // adiciona a string "abc" na posição 3

// Mostra o tamanho do vetor (conta o índice mais alto + 1)
console.log('Tamanho de v1: ' + v1.length)

// Mostra o conteúdo completo do vetor v1
console.log(v1)


// ========================
// OUTRO MODO DE CRIAR VETORES
// ========================

// Criação de um vetor com elementos já definidos
let v2 = [10, 'abc', 7.5]

// Mostra o tamanho e o conteúdo do vetor v2
console.log('Tamanho do V2: ' + v2.length)
console.log(v2)

// Adiciona um novo valor na posição 7 (criando posições vazias no meio)
v2[7] = 45

// Mostra o novo tamanho e conteúdo do vetor v2
console.log('Tamanho do V2: ' + v2.length)
console.log(v2)


// ========================
// TRABALHANDO COM VETORES DE STRINGS
// ========================

// Criação de um vetor com nomes
const nome = ["Ana", "Alex", "Vitor", "Joao", "Andreia"]

// Filtra os nomes que começam com a letra "A"
// startsWith("A") retorna true se o nome começar com 'A'
const comecamComA = nome.filter(n => n.startsWith("A"))
// mapeamento de cada nome para algum valor: []
// Mostra os nomes que começam com A
console.log(comecamComA)


// ========================
// USANDO MAP PARA TRANSFORMAR ELEMENTOS
// ========================

// Cria um novo vetor apenas com a primeira letra de cada nome
// charAt(0) pega o primeiro caractere da string
const letras = nome.map(n => n.charAt(0))

// Mostra o vetor com as iniciais
console.log(letras)

// Se todos estão com a letra A
// Verifica se todos da lista cumprem uma condição: boolean(true or false)
const todosComA =  nome.every(n => n.startsWith("A"))
console.log(todosComA)
// ACUMULA EM S A SOMA dos valores n em numeros
const  numeros = [1,2,3,4,5]
const soma =  numeros.reduce((s, n)=> s +n)
console.log(soma)

