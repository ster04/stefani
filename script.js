document.addEventListener("DOMContentLoaded", function() {  //so é um event listener (ouvidor de eventos), que ouve e aguarda o disparo do evento
    const decreaseFontSizeButton = document.getElementById("decreaseFontSizeButton"); //DESCREVER UM BOTAO E SUA FONTE
    const increaseFontSizeButton = document.getElementById("increaseFontSizeButton");//O QUE O BOTAO IRA FAZER
    const changeColorButton = document.getElementById("changeColorButton");//INSTUIR UM BOTAO COR
    let currentFontSize = 16; // Tamanho de fonte inicial
    let colorsChanged = false; // Estado das cores

    decreaseFontSizeButton.addEventListener("click", function() {
        adjustFontSize(-2); // Diminuir o tamanho da fonte em 2 pixels
    });

    increaseFontSizeButton.addEventListener("click", function() {
        adjustFontSize(2); // Aumentar o tamanho da fonte em 2 pixels
    });

    changeColorButton.addEventListener("click", function() {
        const body = edocument.querySelector("body");//o corpo da fonte
        const header = document.querySelector("header");//cabeça da fonte
        const footer = documnt.querySelector("footer");//marca a área inferior, normalmente conhecida como rodapé, do conteúdo geral do documento ou do conteúdo de uma seção específica a qual ele está subordinado.

        if (!colorsChanged) {
            // Cores vivas
            body.style.backgroundColor = "#ffcc00"; // Amarelo
            header.style.backgroundColor = "#ff6666"; // Rosa
            footer.style.backgroundColor = "#66ccff"; // Azul claro
            colorsChanged = true;
            changeColorButton.textContent = "Cores Originais";
        } else {
            // Cores originais (preto e branco)
            body.style.backgroundColor = "#f8f9fa"; // Branco
            header.style.backgroundColor = "#343a40"; // Cinza escuro
            footer.style.backgroundColor = "#343a40"; // Cinza escuro
            colorsChanged = false;//FALSO
            changeColorButton.textContent = "Cores Vivas";//DEFINIÇAO DE COR
        }
    });

    function adjustFontSize(change) {//FONTE E FUNCIONAMENTO
        const body = document.querySelector("body");//DOCUMENTO
        
        // Atualizar o tamanho da fonte
        currentFontSize += change;// TAMANHO DA FONTE
        body.style.fontSize = currentFont
        body.style.fontSize = currentFontSize + "px";//DEFINIR O TAMANHO DA  FONTE E DO NUMERO
    }
});