/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
 // old logic: create board
  // var allRows = []; //fixme
  // var solution;
  // // create array;
  // for (var i = 0; i < n; i++){
  //   var row = [];
  //   for (var j = 0; j < n; j++) {
  //     row.push(0);
  //   }
  //   allRows.push(row.slice(0));
  // }
window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var allRows = board.rows();
  var solution;



  // iterate through allRows
  for (var r = 0; r < allRows.length; r++) {
    // iterate through each row
    for (var c = 0; c < allRows[r].length; c++) {
      allRows[r][c] += 1;
      if (board.hasColConflictAt(c) || board.hasRowConflictAt(r)){
        allRows[r][c] -=1;
      }
    }
  }

  // console.log(allRows);
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return allRows;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {


  var allBoards = [];
  var solutionCount = allBoards.length;
 //  var startRow = 0;
 //  for (var i=startRow; i<allRows.length; i++){
  var findSolution = function (row,column) {
    row = row || 0;
    column = column || 0;
    var board = new Board({n: n});
    var startBoard = board.rows();
    startBoard[row][column] = 1;
    // iterate through each row
    for (var r = 0; r < startBoard.length; r++) {
      // iterate through each column
      for (var c = 0; c < startBoard.length; c++) {
        if (startBoard[r][c] !== 1) {
          startBoard[r][c] = 1;
          if (board.hasColConflictAt(c) || board.hasRowConflictAt(r)){
            startBoard[r][c] -= 1;
          }
        }
      }
    }

    var startBoardStringified = JSON.stringify(startBoard);
    console.log(startBoardStringified);
    if (!_.contains(allBoards, startBoardStringified)) {
      allBoards.push(startBoardStringified);
    }

    var startBoardFlip = startBoard.reverse();
    var startBoardStringified = JSON.stringify(startBoardFlip);

    if (!_.contains(allBoards, startBoardStringified)) {
      allBoards.push(startBoardStringified);
    }

    var startBoardReverse = startBoard;
    _.each(startBoardReverse, function (row) {
        row = row.reverse();
    });

    var startBoardStringified = JSON.stringify(startBoardReverse);

    if (!_.contains(allBoards, startBoardStringified)) {
      allBoards.push(startBoardStringified);
    }

    if (row < n) {
      if (column < n-1) {
        findSolution(row,++column);
      } else {
        if (row < n-1 ) {
          findSolution(++row,0);
        }
      }
    }

  };
  findSolution(0,0);
  console.log(allBoards);
  console.log(allBoards.length);
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  //return solutionCount;
  return allBoards.length;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
