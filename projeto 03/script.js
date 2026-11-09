
// Capturando os elementos HTML
const formulario = document.getElementById("formulario");

const resultado = document.getElementById("resultado");


// Detectando quando o formulário é enviado
formulario.addEventListener("submit", function(evento) {

    // Impede a página de recarregar
    evento.preventDefault();


    // Capturando as notas digitadas
    let nota1 = Number(document.getElementById("nota1").value);

    let nota2 = Number(document.getElementById("nota2").value);

    let nota3 = Number(document.getElementById("nota3").value);


    // Criando um Array com as notas
    let notas = [nota1, nota2, nota3];


    // Verificando se alguma nota está fora do intervalo
    if (notas.some(nota => nota < 0 || nota > 10)) {

        resultado.className = "";

        resultado.innerText = "Digite notas entre 0 e 10.";

        return;
    }


    // Calculando a média
    let media = (nota1 + nota2 + nota3) / 3;


    // Variáveis para armazenar a situação
    let situacao;
    let classe;


    // Verificando a situação do aluno
    if (media >= 7) {

        situacao = "Aprovado!";
        classe = "aprovado";

    } else if (media >= 5) {

        situacao = "Recuperação!";
        classe = "recuperacao";

    } else {

        situacao = "Reprovado!";
        classe = "reprovado";

    }


    // Exibindo o resultado na página
    resultado.className = classe;

    resultado.innerHTML =
        "Média: " + media.toFixed(2) +
        "<br>Situação: " + situacao;

});
