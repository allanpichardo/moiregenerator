let patternType = 0;
let staticPattern;
let movingPattern;

function init() {

    let canvas = document.getElementById('mainCanvas');
    let context = canvas.getContext("2d");

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    staticPattern = getPattern(context);
    movingPattern = getPattern(context);

    listenForClick(context);
    listenForDrag();
    listenForScale();

    renderScene();
}

function renderScene() {
    staticPattern.draw();
    movingPattern.draw();

    requestAnimationFrame(renderScene)
}

function getPattern(context) {
    console.log("pattern: "+patternType);
    switch(patternType) {
        case 0:
        return new Circle(context);
        case 1:
        return new Curves(context);
        case 2:
        return new Squares(context);
    }
}

function listenForClick(context) {
    document.addEventListener('dblclick', function(e) {
        patternType = (patternType + 1) % 3;
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        staticPattern = getPattern(context);
        movingPattern = getPattern(context);
    });
}

function listenForScale() {
    let isScaling = false;
    let startAmount;

    document.addEventListener('keydown', function(e) {
        if(e.key === "ArrowUp") {
            isScaling = true;
            movingPattern.resize(2);
        }
        if(e.key === "ArrowDown") {
            isScaling = true;
            movingPattern.resize(-2);
        }
    }, false);
    document.addEventListener('mouseup', function(e) {
        if(e.key === "ArrowUp" || e.key === "ArrowDown") {
            isScaling = false;
        }
    }, false);
}

function listenForDrag() {
    let isDragging = false;
    let startX;
    let startY;
    document.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
    }, false);
    document.addEventListener('mousemove', function(e) {
        if(isDragging) {
            movingPattern.setOffset(e.clientX - startX, e.clientY - startY);
        }
    });
    document.addEventListener('mouseup', function(e) {
        isDragging = false;
    }, false);
}

function resizeCanvas(e) {
    document.getElementById('mainCanvas').width = window.innerWidth;
    document.getElementById('mainCanvas').height = window.innerHeight;
}
