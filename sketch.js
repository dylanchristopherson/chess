// Team 0 and 1

var gameboard;
var pawns = [];
var pawnx = 50;

var bishops = [];
var rooks = [];
var knights = [];
var queens = [];
var kings = [];

var boardPixelLocals = [];
var boardPixelLocalsX = [];
var boardPixelLocalsY = [];

function setup() {
  
  createCanvas(800, 800);
  background(153);

  gameboard = new GameBoard();
  gameboard.show();

  // Storing all locations on board
  var temp = 50;
  
  
  for(var j = 0; j < 8; j++) {
    boardPixelLocalsX[j] = temp;
    boardPixelLocalsY[j] = temp;
    // = new point(xtemp, ytemp);
    temp += 100;
  }
  temp += 100;
    
  
/*
  // Creates pawns
  for (p = 0; p < 8; p++) {
    // fill(0, 0, 255);
    pawns[p] = new Pawn(pawnx, 150) // Player 1 pawns
    // fill(255, 0, 0);
    pawns[p + 8] = new Pawn(pawnx, 650) // Player 2 pawns
    pawns[p].show()
    pawns[p + 8].show()
    pawnx = pawnx + 100;
  }
*/
  // Creates rooks
  rooks[0] = new Rook(50, 50);
  rooks[1] = new Rook(50, 750);
  rooks[2] = new Rook(750, 50);
  rooks[3] = new Rook(750, 750);

  for (i = 0; i < 4; i++) rooks[i].show();

  // Creates knights
  knights[0] = new Knight(150, 50);
  knights[1] = new Knight(650, 50);
  knights[2] = new Knight(150, 750);
  knights[3] = new Knight(650, 750);

  for (i = 0; i < 4; i++) knights[i].show();

  // Creates bishops
  bishops[0] = new Bishop(250, 50);
  bishops[1] = new Bishop(550, 50);
  bishops[2] = new Bishop(250, 750);
  bishops[3] = new Bishop(550, 750);
  

  for (i = 0; i < 4; i++) bishops[i].show();

  // Creates kingsueens
  queens[0] = new Queen(350, 50);
  queens[1] = new Queen(350, 750);

  for (i = 0; i < 2; i++) queens[i].show();

  // Creates kings
  kings[0] = new King(450, 50);
  kings[1] = new King(450, 750);

  for (i = 0; i < 2; i++) kings[i].show();
}

function draw() {
  // put drawing code here
  background(153);
  //ellipse(50, 50, 80, 80);
  //background(153);
 // fill(0, 0, 255)
  
  gameboard.show();
/*
  for (z = 0; z < 8; z++) {
    fill(255, 0, 0)
    pawns[z].update();
    fill(0, 255, 0)
    pawns[z + 8].update();
  }
*/
  fill(20, 152, 200)

  // Updates the positions of all pieces
  for (i = 0; i < 4; i++) rooks[i].update();
  for (i = 0; i < 4; i++) knights[i].update();
  for (i = 0; i < 2; i++) queens[i].update();
  for (i = 0; i < 2; i++) kings[i].update();

  fill(20, 152, 10)
  for (i = 0; i < 4; i++) bishops[i].update();
}

/***** Next steps *****/


// In progress

// When moving a piece, if you hover over others, the pieces disappear. Still needs to fix. Really important. Create an in posession variable?
// Create a matrix of occupied positions. Perhaps pass into game board?
// Create a default code location so all piece information is in one place. Deletes a lot of duplicate code
// Need to be able to differentiate the pieces from one another
// Improve click and drag for pieces?

// Finished

// If there is a piece on a square, needs to snap to center - In progress
// Create a function to figure where you're at, and then figure out the closest legal position
// Constrain a given piece in any direction - in progress/almost done
// Create a rectange for every position on board - In progress