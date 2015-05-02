//window.addEventListener("load", eventWindowLoaded, false);
//function eventWindowLoaded() {
//    canvasApp(); //Chamada da função da nossa aplicação
//}
//✪
//window.onload = function () {
//    canvasApp();
//};

$(document).ready(function () {
    canvasApp();
});

function canvasApp() {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var x = 10;
    var y = 10;
    var sx = x;
    var sy = y;

    var interval = 60;
    var loop = setInterval(drawScreen, interval);

    function drawScreen() {
//        x+=10;
//        y+=10;
//        sx+=10;
//        if (sx > canvas.width || sy > canvas.height || x > canvas.width || y > canvas.height) {
//            //clearInterval(loop);
//            x = 10;
//            y = 10;
//            sx = x;
//            sy = x;
//        }
        //alert(canvas.width+" "+sx);
        //background
        context.fillStyle = "rgba(255,255,255,1)";
        context.fillRect(0, 0, 500, 300);
        //context.clearRect(0, 0, 500, 300);

        //box
        context.strokeStyle = "#000000";
        context.strokeRect(0, 0, 500, 300);

        //Retângulo
        context.fillStyle = "blue";
        context.fillRect(x, y, 50, 50);


        //full circle
        context.beginPath();
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.arc(
                sx + 25, //Posição X, referência ao centro do círculo;
                sy + 25, //Posição Y;
                20, //Raio do círculo;
                (Math.PI / 180) * 0, //Ângulo inicial, onde começará o traço;
                (Math.PI / 180) * 360, //Ângulo final, onde termina o traço;
                false //Sentido do traço, horário (FALSE), anti-horário (TRUE);
                );
        context.fillStyle = "yellow"; //Configura a cor a ser preenchido o círculo
        context.fill(); //Realiza o prenchimento do círculo
        context.stroke(); //Desenha o contorno do círculo
        context.closePath(); //Finaliza o caminho "Path" do desenho atual


        //Boca
        context.beginPath();
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.arc(
                sx + 25, //Posição X, referência ao centro do círculo;
                sy + 25, //Posição Y;
                15, //Raio do círculo;
                (Math.PI / 180) * 0, //Ângulo inicial, onde começará o traço;
                (Math.PI / 180) * 180, //Ângulo final, onde termina o traço;
                false //Sentido do traço, horário (FALSE), anti-horário (TRUE);
                );
        context.stroke(); //Desenha o contorno do círculo
        context.closePath(); //Finaliza o caminho "Path" do desenho atual

        //olho esquerdo
        context.beginPath();
        context.arc(
                sx + 18, //Posição X, referência ao centro do círculo;
                sy + 20, //Posição Y;
                4, //Raio do círculo;
                (Math.PI / 180) * 0, //Ângulo inicial, onde começará o traço;
                (Math.PI / 180) * 360, //Ângulo final, onde termina o traço;
                false //Sentido do traço, horário (FALSE), anti-horário (TRUE);
                );
        context.fillStyle = "black"; //Configura a cor a ser preenchido o círculo
        context.fill(); //Realiza o prenchimento do círculo
        context.closePath(); //Finaliza o caminho "Path" do desenho atual

        //olho direito
        context.beginPath();
        context.arc(
                sx + 32, //Posição X, referência ao centro do círculo;
                sy + 20, //Posição Y;
                4, //Raio do círculo;
                (Math.PI / 180) * 0, //Ângulo inicial, onde começará o traço;
                (Math.PI / 180) * 360, //Ângulo final, onde termina o traço;
                false //Sentido do traço, horário (FALSE), anti-horário (TRUE);
                );
        context.fillStyle = "black"; //Configura a cor a ser preenchido o círculo
        context.fill(); //Realiza o prenchimento do círculo
        context.closePath(); //Finaliza o caminho "Path" do desenho atual
    }

    $(document).keydown(function (e) {
        var key = e.which;
        if (key === 37)
            x -= 5;
        else if (key === 38)
            y -= 5;
        else if (key === 39)
            x += 5;
        else if (key === 40)
            y += 5;
        else if (key === 65)
            sx -= 5;
        else if (key === 68)
            sx += 5;
        else if (key === 83)
            sy += 5;
        else if (key === 87)
            sy -= 5;
    });
    
}