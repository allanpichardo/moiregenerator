function init() {

    let canvas = document.getElementById('mainCanvas');
    let context = canvas.getContext("2d");

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    renderScene(context);

}

function renderScene(context) {
    let circle = new Circle(context);
    circle.draw();

    let isDragging = false;

    document.addEventListener('click', function(e) {
        console.log("in drag");
        isDragging = true;
        circle.setOffset(e.clientX, e.clientY);
        circle.draw();
    });
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
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        let centerX = (window.innerWidth / 2);
        let centerY = (window.innerHeight / 2);
        
        if(this.offsetX < centerX) {
            centerX -= this.offsetX;
        } else {
            centerX += this.offsetX;
        }

        if(this.offsetY < centerY) {
            centerY -= this.offsetY;
        } else {
            centerY += this.offsetY;
        }

        this.context.lineWidth = 5;

        for(let i = 10; i < window.innerWidth; i += 10) {
            this.context.beginPath();
            this.context.arc(centerX, centerY, i, 0, 2 * Math.PI, false);
            this.context.stroke();
        }
        
    };

    this.setOffset = function(x, y) {
        this.offsetX = x;
        this.offsetY = y;
    }
}