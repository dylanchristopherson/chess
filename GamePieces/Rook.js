function Rook(x, y, team) {
    this.x = x; // x position
    this.y = y; // y position
    this.xp = x; // x previous position
    this.yp = y; // y previous position

    this.xc = 0; // Coordinates of x
    this.yc = 0; // Coordinates of y
    this.xcp = 0; // Previous coordinates of x
    this.ycp = 0; // Previous coordinates of y

    this.xdiff = 0;
    this.ydiff = 0;

    this.diam = 40;
    this.dist = 100;

    this.team = 0;

    this.boardPixelLocation = [];
    
    // Turn this into a loop but I'm not sure how to yet
    this.boardPixelLocation[0] = 50;    
    this.boardPixelLocation[1] = 150;    
    this.boardPixelLocation[2] = 250;
    this.boardPixelLocation[3] = 350;    
    this.boardPixelLocation[4] = 450;    
    this.boardPixelLocation[5] = 550;
    this.boardPixelLocation[6] = 650;
    this.boardPixelLocation[7] = 750;
    
    /*
    this.temp = 50;
    for(this.j = 0; this.j < 8; this.j++) {
        this.boardPixelLocation[0] = this.temp;
        this.temp = this.temp + 100;    
    }
    */

    this.show = function () {
        setColor(team);
    }

    this.update = function () {
        
        setColor(team);

        this.dist = dist(mouseX, mouseY, this.x, this.y);
        if (mouseIsPressed == true && this.dist < this.diam) { // Allows the piece to follow mouse movements
            
            // if pressed and on circle, x and y will update
            //this.x = mouseX;
            //this.y = mouseY;
            //circle(mouseX, mouseY, this.diam);
            this.x = mouseX;
            this.y = mouseY;            
            rect(this.x - (this.diam/2), this.y - (this.diam/2), this.diam, this.diam);
        } else { 
            // Once the mouse is released, check if the coordinates are different, if they are, 
            // check for a legal move and update the location
            this.xc = this.convertToCoord(this.x);
            this.yc = this.convertToCoord(this.y);
            this.xcp = this.convertToCoord(this.xp);
            this.ycp = this.convertToCoord(this.yp);

            this.checkForLegalMove(this.xc, this.yc, this.xcp, this.ycp);    
        }
    }

    // nx: new x, ny: new y, px: previous x, py: previous y
    this.checkForLegalMove = function (nx, ny, px, py) {
    
        this.xdiff = nx - px;
        this.ydiff = ny - py;

        // Figure out command for absolute value
        if (this.xdiff < 0) {
            this.xdiff = this.xdiff * -1;
        }

        if (this.ydiff < 0) {
            this.ydiff = this.ydiff * -1;
        }

        // Has moved
        if (nx != px || ny != py) { 

            // Because this is a rook, either the difference in the x direction or the difference in the y direction will need
            // to stay the same


            if(this.xdiff == 0 || this.ydiff == 0) {                 
                rect(this.boardPixelLocation[nx]-(this.diam/2), this.boardPixelLocation[ny]-(this.diam/2),this.diam, this.diam);
                this.x = this.boardPixelLocation[nx]
                this.y = this.boardPixelLocation[ny]
                this.xp = this.boardPixelLocation[nx]
                this.yp = this.boardPixelLocation[ny]
            } else { // If the rook didn't move in a valid direction
                rect(this.boardPixelLocation[nx]-(this.diam/2), this.boardPixelLocation[ny]-(this.diam/2),this.diam, this.diam);
                this.x = this.boardPixelLocation[px]
                this.y = this.boardPixelLocation[py]
                this.xp = this.boardPixelLocation[px]
                this.yp = this.boardPixelLocation[py]
            }
        } else {  // Hasn't moved, set the position to the previous position
            rect(this.boardPixelLocation[nx]-(this.diam/2), this.boardPixelLocation[ny]-(this.diam/2),this.diam, this.diam);
            this.x = this.boardPixelLocation[px]
            this.y = this.boardPixelLocation[py]
            this.xp = this.boardPixelLocation[px]
            this.yp = this.boardPixelLocation[py]
        }
    }

    // 
    this.convertToCoord = function (p) {
        return (p - (p % 100)) / 100
    }

    this.drawRook = function() {
        rect(this.boardPixelLocation[nx]-(this.diam/2), this.boardPixelLocation[ny]-(this.diam/2),this.diam, this.diam);
    }
}


// Bishop is in P(0, 0)
// P(0,1) is legal
// P(0,2) is legal
// P (0,3)
// P (0,4)
// P (0,5)
// P (0,6)
// P (0, 7)

// P(0,0)
// P(1,0)
// P(2,0)
// P(3,0)
// P(4,0)


// If the difference between start and finish for both is the same, it's a legal move?

