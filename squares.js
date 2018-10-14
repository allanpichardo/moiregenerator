function Squares(context) {

    this.context = context;
    this.offsetX = 0;
    this.offsetY = 0;
    this.centerX = (window.innerWidth / 2);
    this.centerY = (window.innerHeight / 2);
    this.offsetSize = 0;


    this.draw = function() {

        this.centerX = (window.innerWidth/2) + this.offsetX;
        this.centerY = (window.innerHeight/2) + this.offsetY;

        this.context.lineWidth = 5;

        for(let i = 10; i < window.innerWidth; i += 10) {
            let radius = (i + this.offsetSize) > 0 ? i + this.offsetSize : i;
            this.context.beginPath();
            this.context.fillStyle = 'rgba(255, 255, 255, 0)';
            this.context.rect(this.centerX-i, i, radius*2, radius*2);
            this.context.fill();
            this.context.stroke();
        }

    };

    this.resize = function(amount) {
        console.log(amount);
        this.offsetSize += amount;
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    this.setOffset = function(x, y) {
        this.offsetX += .1 * x;
        this.offsetY += .1 * y;
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
}
