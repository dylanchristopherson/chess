var g;
var pawns = [];
var pawnx = 50;

function setup() {
  createCanvas(800, 800);
  background(153);

  g = new GameBoard();
  g.show();

  for (p = 0; p < 8; p++) {
    // fill(0, 0, 255);
    pawns[p] = new Pawn(pawnx, 150)
    // fill(255, 0, 0);
    pawns[p + 8] = new Pawn(pawnx, 650)
    pawns[p].show()
    pawns[p + 8].show()
    pawnx = pawnx + 100;
  }
}

function draw() {
  // put drawing code here
  // ellipse(50, 50, 80, 80);
  background(153);
  g.show();

  for (z = 0; z < 8; z++) {
    pawns[z].update();
    pawns[z + 8].update();
  }
}