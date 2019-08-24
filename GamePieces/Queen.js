function Queen(x, y) {
    this.x = x;
    this.y = y;
    this.diam = 40;
    this.dist = 100;

    this.show = function () {
        fill(255, 204, 0);
        circle(this.x, this.y, this.diam);
    }

    this.update = function () {
        if (mouseIsPressed == true) {

            this.dist = dist(mouseX, mouseY, this.x, this.y);
            if (this.dist < this.diam / 2) {
                circle(mouseX, mouseY, this.diam);
                this.x = mouseX;
                this.y = mouseY;
            } else {
                circle(this.x, this.y, this.diam);
            }
        } else {
            circle(this.x, this.y, this.diam);
        }
    }
}