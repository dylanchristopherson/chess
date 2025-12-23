function Bishop(x, y, team) {
    this.x = x;
    this.y = y;
    this.xp = x;
    this.yp = y;

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

        circle(this.x, this.y, this.diam);
    }

    this.update = function () {
        setColor(team);

        this.dist = dist(mouseX, mouseY, this.x, this.y);
        if (mouseIsPressed == true && this.dist < this.diam) {
            
            // if pressed and on circle, x and y will update
            this.x = mouseX;
            this.y = mouseY;
            circle(mouseX, mouseY, this.diam);
        } else {
            
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

        if (nx != px || ny != py) { // Has moved
            if(this.xdiff == this.ydiff) {                 
                circle(this.boardPixelLocation[nx], this.boardPixelLocation[ny], this.diam);
                this.x = this.boardPixelLocation[nx]
                this.y = this.boardPixelLocation[ny]
                this.xp = this.boardPixelLocation[nx]
                this.yp = this.boardPixelLocation[ny]
            } else {
                circle(this.boardPixelLocation[px], this.boardPixelLocation[py], this.diam);
                this.x = this.boardPixelLocation[px]
                this.y = this.boardPixelLocation[py]
                this.xp = this.boardPixelLocation[px]
                this.yp = this.boardPixelLocation[py]
            }
        } else { 
            circle(this.boardPixelLocation[px], this.boardPixelLocation[py], this.diam);
            this.x = this.boardPixelLocation[px]
            this.y = this.boardPixelLocation[py]
            this.xp = this.boardPixelLocation[px]
            this.yp = this.boardPixelLocation[py]
        }
    }

    this.convertToCoord = function (p) {
        return (p - (p % 100)) / 100
    }
}

// Bishop is in P(2, 0)
// P(1,1) is legal
// P(0,2) is legal

// P (3,1)
// P (4,2)
// P (5,3)
// P (6,4)

// P (2, 4)
// P (3, 3)
// P (4, 2)

// If the difference between start and finish for both is the same, it's a legal move?



// Original movement for items
        /*
        if (mouseIsPressed == true) {

            this.dist = dist(mouseX, mouseY, this.x, this.y);
            if (this.dist < this.diam * 2) {
                circle(mouseX, mouseY, this.diam);
                this.x = mouseX;
                this.y = mouseY;
            } else {
                
           
               // print("X: ", this.xd)
                // print("Y: ", this.yd)

                // print("X: ", this.x)
                // print("Y: ", this.y)
                // print("This.xd bishop: ", this.xd);
               // print("This.yd bishop: ", this.yd);
               this.xd = (this.x - (this.x %100)) / 100
               this.yd = (this.y - (this.y %100)) / 100
               circle(this.boardPixelLocalsX[this.xd], this.boardPixelLocalsX[this.yd], this.diam);
            }
        } else {
            this.xd = (this.x - (this.x %100)) / 100
            this.yd = (this.y - (this.y %100)) / 100
            circle(this.boardPixelLocalsX[this.xd], this.boardPixelLocalsX[this.yd], this.diam);
            //circle(this.x, this.y, this.diam);
        }
        */