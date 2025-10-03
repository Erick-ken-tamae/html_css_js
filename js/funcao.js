//1- Função Simples
function hello(){
    console.log('Hello')
}
hello()
function hello(nome){
    console.log("hello," + nome)
}
hello("Pokemon")

function soma(a, b){
    return a + b
}
const s = soma(1, 2)
console.log(s)
console.log(soma(3,4))

// 2 -função anonimas com atribução para uma varavel
const quadrado  =  function(n){
    return n * n
}

//PRINT(JAVASCRIPT)
console.log(quadrado(5))
console.log(quadrado(2))

const dobro = function(n=10){
    return n * 2
}
// ELE ESTA SEM O PARAMETRO => 10X2 =20
console.log("dobro sem paramêtro:" + dobro())
//ELE ESTA COM PARAMETRO(4) +> 4X2 = 8
console.log("Dobro com paramêtro: " + dobro(4))

//sem o return e o function e sem as chaves {}
const ePar = n => 
    n % 2 === 0 

console.log(ePar(20))