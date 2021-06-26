function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!!!";
}

function redirecionar(){
    window.open ("https://www.youtube.com/");
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //ocument.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento,value)
}

/*
function soma (n1, n2){
    return n1 + n2;
}

var validar = 0

function validaIdade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}


var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);
*/

/*
function soma (n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <=5;  count++){
    alert(count);
}
*/

/*
var count = 0
while(count <=5){
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var idade = prompt("qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

//var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
//console.log(frutas)
//alert(frutas[1].nome)
//var list = ["Maçã", "Pêra", "Laranja"];
//console.log(list)
//console.log(list.toString)
//console.log(list.join(" - "))
//var nome = "Pedro Lima";
//var idade = 26;
//alert (nome + " tem " + idade + " anos ")
//console.log(nome)
//console.log(idade)