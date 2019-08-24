var gameboard;
var pawns = [];
var pawnx = 50;

var bishops = [];
var rooks = [];
var knights = [];
var queens = [];
var kings = [];

function setup() {
  createCanvas(800, 800);
  background(153);

  gameboard = new GameBoard();
  gameboard.show();

  // Creates pawns
  for (p = 0; p < 8; p++) {
    // fill(0, 0, 255);
    pawns[p] = new Pawn(pawnx, 150)
    // fill(255, 0, 0);
    pawns[p + 8] = new Pawn(pawnx, 650)
    pawns[p].show()
    pawns[p + 8].show()
    pawnx = pawnx + 100;
  }

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
  // ellipse(50, 50, 80, 80);
  background(153);
  fill(0, 0, 255)
  gameboard.show();

  for (z = 0; z < 8; z++) {
    fill(255, 0, 0)
    pawns[z].update();
    fill(0, 255, 0)
    pawns[z + 8].update();
  }

  fill(20, 152, 200)
  for (i = 0; i < 4; i++) rooks[i].update();
  for (i = 0; i < 4; i++) knights[i].update();
  for (i = 0; i < 4; i++) bishops[i].update();
  for (i = 0; i < 2; i++) queens[i].update();
  for (i = 0; i < 2; i++) kings[i].update();
}

/***** Next steps ***** /

// Create a rectange for every position on board
// Small updates to shapes of chess pieces
// If there is a piece on a square, needs to snap to center
// Create a matrix of occupied positions. Perhaps pass into game board?

