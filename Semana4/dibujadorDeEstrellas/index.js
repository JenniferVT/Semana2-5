const canvasStar = document.getElementById("canvasStar");
const inputNumber = document.getElementById("inputNumber");
const inputRange = document.getElementById("inputRange");
const inputColor = document.getElementById("inputColor");
const inputFill = document.getElementById("inputFill");

const drawStar = (number, range, color, fillStar) => {
    // hacemos referencia al contexto del canvas
    const star = canvasStar.getContext("2d");
    // centramos la figura dentro de canvas
    // definimos el grosor de las lineas
    star.lineWidth = 5;
    // limpiamos la estrella
    star.clearRect(0, 0, canvasStar.width, canvasStar.height)
    var step = Math.PI / number,
        angle = Math.PI / 2,
        hyp, x, y;
    star.fillStyle = color;
    star.strokeStyle = color;
    star.lineWidth = 1;
    // iniciamos el pintado de la estrella
    star.beginPath();
    for (var i = 0; i <= 2 * number; i++) {
        hyp = i & 1 ? range : 100;
        x = 200 + Math.cos(angle) * hyp;
        y = 200 + Math.sin(angle) * hyp;
        angle += step;
        star.lineTo(x, y);
        star.stroke();
    }
    // cerramos el pintado de la estrella
    star.closePath();
    if (fillStar) {
        star.fill();
    }
}

inputNumber.addEventListener("change", () => {
    drawStar(inputNumber.value, inputRange.value, inputColor.value, inputFill.checked);
});

inputRange.addEventListener("change", () => {
    drawStar(inputNumber.value, inputRange.value, inputColor.value, inputFill.checked);
});

inputColor.addEventListener("change", () => {
    drawStar(inputNumber.value, inputRange.value, inputColor.value, inputFill.checked);
});

inputFill.addEventListener("change", () => {
    drawStar(inputNumber.value, inputRange.value, inputColor.value, inputFill.checked);
});

drawStar(inputNumber.value, inputRange.value, inputColor.value, inputFill.checked);