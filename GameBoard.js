function GameBoard() {
    // put setup code here

    this.x = 0;
    this.y = 0;
    this.even = true;

    this.show = function () {
        // createCanvas(800, 800);
        //background(153);
        this.x = 0;
        this.y = 0;

        for (i = 0; i < 8; i++) {
            for (j = 0; j < 4; j++) {
                //fill(color(220, 220, 220))
                rect(this.x, this.y, 100, 100);
                this.x = this.x + 200
            }
            this.y = this.y + 100;

            // Conditional operator
            this.x = 0
            if (this.even == true) {
                this.x = 100
                this.even = false
            } else {
                this.even = true
            }
        }
        i = 0;
    }
}