let inputCaracter = document.querySelector("#caracter");
let inputTamanho = document.querySelector("#tamanho");

let botao = document.querySelector("button");

botao.onclick =  function(){
    let caracter = inputCaracter.value;
    let tamanho = inputTamanho.value;
    let i = 1;
    let escada = "";
    while (i <= tamanho) {
        escada = escada + caracter;
        let resposta = document.createElement ("p");
        resposta.innerHTML = escada;
        let body = document.querySelector ("body");
        body.appendChild (resposta);
        i++;        
    }
}