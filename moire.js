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

function Circle(context, isInteractive = false) {

    this.context = context;
    this.isInteractive = isInteractive;
    this.offsetX = 0;
    this.offsetY = 0;

    this.draw = function() {
        let centerX = (window.innerWidth / 2) + this.offsetX;
        let centerY = (window.innerHeight / 2) + this.offsetY;

        this.context.lineWidth = 5;

        for(let i = 10; i < window.innerWidth; i += 15) {
            this.context.beginPath();
            this.context.fillStyle = 'rgba(255, 255, 255, 0)';
            this.context.arc(centerX, centerY, i, 0, 2 * Math.PI, false);
            this.context.fill();
            this.context.stroke();
        }
        
    };

    this.setOffset = function(x, y) {
        this.offsetX = x;
        this.offsetY = y;
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
}