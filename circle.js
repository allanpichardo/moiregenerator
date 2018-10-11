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