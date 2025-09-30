//declaração constantes
const nome = "Erick";
const idade = 18;
//aspas simples e duplas têm o mesmo jeito
const senha = "123imt";
console.log(nome)
console.log(idade)
console.log(senha)

//valor = 5; não é possvel redefinir valor de uma const

//variaveis escopo local
let a = 2;
let b =  "abc";
console.log(a,b)

//variaveis globais ou de função
var c = 3;
var d = true;
console.log(c,d)

//compare var com let, escopo único
var m;
let n;
console.log("m=" +m, ", n=" +n)

var m = 10;
console.log("m=" +m)

var ano = 20;
if (ano > 18) {
    var nome_pessoa ="Astolfo";
    console.log(nome_pessoa + " pode dirigir");
}

let pessoa = "Adulto";
if (idade > 18) {
    let pessoa = "Jair";
    console.log(pessoa + " pode dirigir")
}
console.log(`pessoa original, ${pessoa}`)


// coerção
const n1 = 2;
const n2 = "34";
const n3 = n1 + n2;
console.log("n3 = " + n3);

const n4 = n1 + Number(n2)
console.log("n4 = " + n4)

