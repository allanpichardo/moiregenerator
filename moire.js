function init() {

    let canvas = document.getElementById('mainCanvas');
    let context = canvas.getContext("2d");

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    renderScene(context);

}

function renderScene(context) {
    let circle = new Circle(context, true);
    let circle2 = new Circle(context, false);
    circle2.draw();
    circle.draw();

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
            circle.setOffset(e.clientX - startX, e.clientY - startY);
            circle.draw();
            circle2.draw();
        }
    });
    document.addEventListener('mouseup', function(e) {
        isDragging = false;
    }, false);

}

function resizeCanvas(e) {
    document.getElementById('mainCanvas').width = window.innerWidth;
    document.getElementById('mainCanvas').height = window.innerHeight;

    renderScene(document.getElementById('mainCanvas').getContext("2d"));
}