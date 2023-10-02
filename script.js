function classificarHeroi() {
    // Obtém o nome e a quantidade de experiência do usuário
    var nome = document.getElementById("nome").value;
    var xp = parseInt(document.getElementById("xp").value);

    // Utiliza uma estrutura de decisão para determinar o nível do herói
    var nivel;
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibe a mensagem com o nível do herói
    var resultado = `O Herói de nome ${nome} está no nível de ${nivel}`;
    document.getElementById("resultado").textContent = resultado;
}
