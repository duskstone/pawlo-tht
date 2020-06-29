var canvas, canvasContext;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    
    loadImages();
   
}

function imageLoadingDoneSoStartGame() {
     var framesPerSecond = 30;
    setInterval(function () {
        moveEverything();
        drawEverything();
    }, 1000 / framesPerSecond);

    initInput();
    jumperReset();
}

function moveEverything() {
    jumperMove();
}

function drawEverything() {
    colorRect(0, 0, canvas.width, canvas.height, 'black');

    drawBricks();

    canvasContext.fillStyle = 'white';
    canvasContext.fillText("Arrow keys to run, spacebar to jump", 8, 14);

    // colorCircle(jumperX, jumperY, JUMPER_RADIUS, 'white');
    pawloDraw();
}