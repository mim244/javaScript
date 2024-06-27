function adicao(num1, num2) {
    return num1 + num2;
}

// Função para realizar a subtração
function subtracao(num1, num2) {
    return num1 - num2;
}

// Função para realizar a multiplicação
function multiplicacao(num1, num2) {
    return num1 * num2;
}

// Função para realizar a divisão
function divisao(num1, num2) {
    // Verifica se o divisor é zero para evitar divisão por zero
    if (num2 === 0) {
        return "Erro: Divisão por zero!";
    }
    return num1 / num2;
}

// Função principal para realizar as operações
function calcularOperacao() {
    // Receber os números do usuário
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));

    // Perguntar ao usuário qual operação realizar
    var operacao = prompt("Qual operação você deseja realizar? (+ para adição, - para subtração, * para multiplicação, / para divisão)");

    // Verificar a operação e exibir o resultado
    switch (operacao) {
        case "+":
            alert("Resultado: " + adicao(num1, num2));
            break;
        case "-":
            alert("Resultado: " + subtracao(num1, num2));
            break;
        case "*":
            alert("Resultado: " + multiplicacao(num1, num2));
            break;
        case "/":
            alert("Resultado: " + divisao(num1, num2));
            break;
        default:
            alert("Operação inválida!");
    }

    // Perguntar se o usuário deseja realizar mais alguma operação
    var continuar = prompt("Deseja realizar mais alguma operação? (S para sim, qualquer outra tecla para sair)");
    if (continuar.toUpperCase() === "S") {
        calcularOperacao(); // Recomeçar o processo
    }
}

// Chamada da função principal para iniciar o processo
calcularOperacao();
Com esse código, você terá uma aplicação simples em JavaScript que permite ao usuário realizar as quatro operações básicas de uma calculadora, e também oferece a opção de continuar realizando mais operações ou sair do programa.




