function Curves(context) {

    this.context = context;
    this.offsetX = 0;
    this.offsetY = 0;
    this.offsetSize = 2;

    this.draw = function() {

        this.context.lineWidth = 3;

        for(let i = 0; i < window.innerWidth * 2; i += 15) {
            let x = i - 200 + this.offsetX;
            context.beginPath();
            context.moveTo(x,0);
            context.bezierCurveTo(x + this.offsetSize, window.innerHeight / 2, i + 200 + this.offsetX, this.offsetY, x + this.offsetSize, window.innerHeight);
            context.stroke();
        }
    };

    this.resize = function(amount) {
        console.log(amount);
        this.offsetSize += amount;
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    this.setOffset = function(x, y) {
        this.offsetX += .01 * x;
        this.offsetY += .01 * y;
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
}