let moveCount = 0;

var decisionArray = [];
for (var i = 0; i < 3; i++) {
  decisionArray[i] = [];
} //for

// [0 0 0]
// [0 0 0]
// [0 0 0]

// [1 0 0]
// [0 0 0]
// [0 0 0]

// [1 0 1]
// [0 0 0]
// [0 0 0]

var tempArray = [];
for (var i = 0; i < 3; i++) {
  tempArray[i] = [];
} //for

function setup() {
  createCanvas(400, 400);
  background("yellow");
  textSize("12");

  //create gameboard lines
  line(133, 0, 133, 400);
  line(266, 0, 266, 400);
  line(0, 133, 400, 133);
  line(0, 266, 400, 266);
  //reset array with 0's
  initArray(decisionArray);
  initArray(tempArray);
} //setup

function initArray(x) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      x[i][j] = "0";
    } //for j
  } //for i
}

// Scores dictionary
let scores = {X: -1,Y: 1,tie: 0};

/* Recursive minimax algorithm
*  Check next possible moves
*
*/
function minimax(board, isMaximizing) {
  
  // Base case
  let result = checkWin(board);
  
  // If result has been achieved (maximum depth)
  if (result !== null) {
    
    return scores[result];
    
  }

  // Recursive Case
  if (isMaximizing) {
    
    let bestScore = -Infinity;
    
    for (let x = 0; x < 3; x++) {
      
      for (let y = 0; y < 3; y++) {
        
        // Is the spot available?
        if (board[x][y] == '0') {
          
          board[x][y] = "Y";
          
          // Recursively check next possible human positions
          let score = minimax(board, false);
          
          board[x][y] = '0';
          
          // Pick the best score
          bestScore = max(score, bestScore);
          
        }
        
      }
      
    }
    
    return bestScore;
    
    // Human move
  } else {
    
    let bestScore = Infinity;
    
    for (let x = 0; x < 3; x++) {
      
      for (let y = 0; y < 3; y++) {
        
        // Is the spot available?
        if (board[x][y] == '0') {
          
          board[x][y] = "X";
          
          // Recursively check next possible ai positions
          let score = minimax(board, true);
          
          board[x][y] = '0';
          
          // Pick best move for human
          bestScore = min(score, bestScore);
          
        }
        
      }
      
    }
    
    return bestScore;
  }
  
}

function bias(board){
  let temp = Array.from(board);
  
  let bestScore = -Infinity;
  
  for (let x = 0; x < 3; x++) {
    
    for (let y = 0; y < 3; y++) {
      
      // Is the spot available?
      if (temp[x][y] == '0') {
        
        temp[x][y] = "Y";
        
        let score = minimax(temp, false);
        
        temp[x][y] = '0';
        
        if (score > bestScore) {
          
          bestScore = score;
          
          row = x
          
          col = y
          
        }
      }
      
    }
    
  }
  
  return bestScore
  
}

/* computerRandomMove
*  Input: board <- Game Board
*  Find space for move  
*/
function computerRandomMove(board) {
 
  let bestScore = -Infinity;
  let row, col;
  
  for (let x = 0; x < 3; x++) {
    
    for (let y = 0; y < 3; y++) {
      
      // Is the spot available?
      if (board[x][y] == '0') {
        
        board[x][y] = "Y";
        
        let score = minimax(board, false);
        
        board[x][y] = '0';
        
        if (score > bestScore) {
          
          bestScore = score;
          
          row = x
          
          col = y
          
        }
      }
      
    }
    
  }
  
  board[row][col] = "Y";
  b();
  return ((row * 3) + col + 1)
 
}

function outputMove() {
  //enter moves into first square
  //1
  if (
    mouseX > 0 &&
    mouseX < 133 &&
    mouseY > 0 &&
    mouseY < 133 &&
    mouseIsPressed &&
    decisionArray[0][0] == "0"
  ) {
    drawX(1);
    moveCount++;
    decisionArray[0][0] = "X";
    consoleOutput(decisionArray);
  } //if

  //2
  else if (
    mouseX > 133 &&
    mouseX < 266 &&
    mouseY > 0 &&
    mouseY < 133 &&
    mouseIsPressed &&
    decisionArray[0][1] == "0"
  ) {
    drawX(2);
    moveCount++; //adds 1
    decisionArray[0][1] = "X";
    consoleOutput(decisionArray);
  } //if

  //3
  else if (
    mouseX > 268 &&
    mouseX < 400 &&
    mouseY > 0 &&
    mouseY < 133 &&
    mouseIsPressed &&
    decisionArray[0][2] == "0"
  ) {
    drawX(3);
    moveCount++;
    decisionArray[0][2] = "X";
    consoleOutput(decisionArray);
  } //if

  //4
  else if (
    mouseX > 0 &&
    mouseX < 133 &&
    mouseY > 133 &&
    mouseY < 266 &&
    mouseIsPressed &&
    decisionArray[1][0] == "0"
  ) {
    drawX(4);
    moveCount++; //adds 1
    decisionArray[1][0] = "X";
    consoleOutput(decisionArray);
  } //if

  //5
  else if (
    mouseX > 133 &&
    mouseX < 266 &&
    mouseY > 133 &&
    mouseY < 266 &&
    mouseIsPressed &&
    decisionArray[1][1] == "0"
  ) {
    drawX(5);
    moveCount++; //adds 1
    decisionArray[1][1] = "X";
    consoleOutput(decisionArray);
  } //if

  //6
  else if (
    mouseX > 266 &&
    mouseX < 400 &&
    mouseY > 133 &&
    mouseY < 266 &&
    mouseIsPressed &&
    decisionArray[1][2] == "0"
  ) {
    drawX(6);
    moveCount++; //adds 1
    decisionArray[1][2] = "X";
    consoleOutput(decisionArray);
  } //if

  //7
  else if (
    mouseX > 0 &&
    mouseX < 133 &&
    mouseY > 266 &&
    mouseY < 400 &&
    mouseIsPressed &&
    decisionArray[2][0] == "0"
  ) {
    drawX(7);
    moveCount++; //adds 1
    decisionArray[2][0] = "X";
    consoleOutput(decisionArray);
  } //if

  //8
  else if (
    mouseX > 133 &&
    mouseX < 266 &&
    mouseY > 266 &&
    mouseY < 400 &&
    mouseIsPressed &&
    decisionArray[2][1] == "0"
  ) {
    drawX(8);
    moveCount++; //adds 1
    decisionArray[2][1] = "X";
    consoleOutput(decisionArray);
  } //if

  //9
  else if (
    mouseX > 266 &&
    mouseX < 400 &&
    mouseY > 266 &&
    mouseY < 400 &&
    mouseIsPressed &&
    decisionArray[2][2] == "0"
  ) {
    drawX(9);
    moveCount++; //adds 1
    decisionArray[2][2] = "X";
    consoleOutput(decisionArray);
  } //if
} //end draw

function consoleOutput(x) {
  for (var i = 0; i < 3; i++) {
    print(i + ": " + x[i][0] + " " + x[i][1] + " " + x[i][2] + " ");
  } //endfor
} //consoleoutput

function drawCircle(n) {
  circle(66 + 133 * ((n - 1) % 3), 66 + 133 * floor(((n - 1) / 3) % 3), 100);
  //text(n, 66 + 166 * ((n - 1) % 3), 66 +
  //133 * floor(((n - 1) / 3) % 3));
  consoleOutput(decisionArray);
} //draw c

function drawX(n) {
  let x = 66 + 133 * ((n - 1) % 3);
  let y = 66 + 133 * floor(((n - 1) / 3) % 3);
  line(x - 40, y - 40, x + 40, y + 40);
  line(x - 40, y + 40, x + 40, y - 40);
} //drawx

function neighbours(a, b, c) {
  
  /*
    (n[0][0] == n[1][0] && n[0][0] == n[2][0] && n[0][0] != "0") ||
    (n[0][1] == n[1][1] && n[0][1] == n[2][1] && n[0][1] != "0") ||
    (n[0][2] == n[1][2] && n[0][2] == n[2][2] && n[0][2] != "0") ||
    (n[0][0] == n[0][1] && n[0][0] == n[0][2] && n[0][0] != "0") ||
    (n[1][0] == n[0][1] && n[1][0] == n[1][2] && n[1][0] != "0") ||
    (n[2][0] == n[2][1] && n[2][0] == n[2][2] && n[2][0] != "0") ||
    (n[0][0] == n[1][1] && n[0][0] == n[2][2] && n[0][0] != "0") ||
    (n[0][2] == n[1][1] && n[0][2] == n[2][0] && n[0][2] != "0")
  
  */
  return a == b && b == c && a != '0';
}

/* Check Win Function
 *  Input: n < decision Array
 *
 */
function checkWin(n) {
  
  let winner = null
  
  for (let i = 0; i < 3; i++){
    
    if (neighbours(n[i][0], n[i][1], n[i][2])) {
      
      winner = n[i][0];
      
    }
    
  }
  
  // Vertical
  for (let i = 0; i < 3; i++) {
    
    if (neighbours(n[0][i], n[1][i], n[2][i])) {
      
      winner = n[0][i];
      
    }
    
  }

  // Diagonal
  if (neighbours(n[0][0], n[1][1], n[2][2])) {
    
    winner = n[0][0];
    
  }
  if (neighbours(n[2][0], n[1][1], n[0][2])) {
    
    winner = n[2][0];
    
  }
  
  let avSpots = 0;
  
  for (let x = 0; x < 3; x++) {
    
    for (let y = 0; y < 3; y++) {
      
      if (n[x][y] == '0') {
        
        avSpots = avSpots + 1
        
      }
      
    }
    
  }

  if (avSpots == 0 && winner == null) {
    return 'tie';
  } else {
    return winner
  }
} //checkwin

function b(){
  let score = (bias(decisionArray))
    if (score == 1){
      console.log ("Heading towards AI win")  
    } else if (score == -1) {
      console.log ("Heading towards human win")
    } else {
      console.log ("Heading towards a tie")
    }  
}

function draw() {
  if (moveCount % 2 == 0) {
    outputMove();
  } //if
  else {
    drawCircle(computerRandomMove(decisionArray)); // return k
    moveCount++;
  } //else
  
  let result = checkWin(decisionArray)
  if ((moveCount == 9) || (result != null)) {
    if (result == "X"){
        console.log ("Human Won")
    } else if (result == "Y") {
      console.log("AI WON")
    } else {
      console.log ("tie")
    }
      
    noLoop();
  } //if
} //draw
