let menu = '';

do {
    menu = prompt("Escolha a geometria que deseja calcular!!\n\n" +
        "1. Triângulo\n" +
        "2. Retângulo\n" +
        "3. Quadrado\n" +
        "4. Trapézio\n" +
        "5. Círculo\n" +
        "6. Sair"
    )
    switch (menu) {
        case "1":
            const baseTriangle = parseFloat(prompt("Insira o valor da base!"))
            const heightTriangle = parseFloat(prompt("Insira o valor da altura"));
            triangle(baseTriangle, heightTriangle)
            break;
        case "2":
            const baseRectangle = parseFloat(prompt("Insira o valor da base!"))
            const heightRectangle = parseFloat(prompt("Insira o valor da altura"));
            rectangle(baseRectangle, heightRectangle)
            break;
        case "3":
            const baseSquare = parseFloat(prompt("Insira o valor da base!"))
            rectangle(baseSquare, baseSquare)
            break;
        case "4":
            const baseTrapezeMinor = parseFloat(prompt("Insira o valor da base menor"));
            const baseTrapezeMajor = parseFloat(prompt("Insira o valor da base maior"));
            const trapezeHeight = parseFloat(prompt("Insira o valor da altura"));
            trapeze(baseTrapezeMinor, baseTrapezeMajor, trapezeHeight)
            break;
        case "5":
            const radius = parseFloat(prompt("Insira o valor do raio"));
            circle(radius);
            break;
        case "6":
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida	");
    }



} while (menu !== '6');

function triangle(base, height) {
    return alert(`A área é ${base * height / 2}`)
}

function rectangle(base, height) {
    return alert(`A área é ${base * height}`)
}

function trapeze(baseMinor, baseMajor, height) {
    return alert(`A área é ${(baseMinor + baseMajor) * height / 2}`)
}

function circle(radius) {
    return alert(`A área é ${Math.PI * radius * radius}`)
}
