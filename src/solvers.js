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

  var Tree = function (n) {
    this.board = new Board({n:n});
    this.matrix = this.board.rows();
    this.children = [];
  }

  var tree = new Tree(n);
  console.log(tree);
  Tree.prototype.createNodes = function (row,column) {
    var newTree =  new Tree(n);
    // toggle;
    newTree.board.togglePiece(row,column);
    this.children.push(newTree);
    // untoggle;
    newTree.board.togglePiece(row,column);
    this.children.push(newTree);
    if (column < n) {
      newTree.createNodes(0,++column);
    }
  };

  tree.createNodes(0,0);

  console.log('tree');
  console.log(tree);
  // create 2 new boards
  // 0,0 with toggle, other no toggle

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
