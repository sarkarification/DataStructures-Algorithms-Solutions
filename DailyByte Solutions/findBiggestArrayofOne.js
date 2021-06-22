
 
function printMaxSubSquare(matrix) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0)
        return 0;
    
    var a = matrix.length;
    var b = matrix[0].length;
 
    var x = [];
    
    for (var i = 0; i < a; i++) {
        var t = [];
        for (var j = 0; j < b; j++) {
            t.push(-1);
        }
        x.push(t);
    }
    console.log(x);
    
    //left column
    for (var i = 0; i < a; i++) {
        x[i][0] = matrix[i][0];
    }
    console.log(x);
    //top row
    for (var j = 0; j < b; j++) {
        x[0][j] = matrix[0][j];
    }
    console.log(x);
    //cells inside
    for(var i = 1; i < a; i++) {
        for (var j = 1; j < b; j++) {
            if (matrix[i][j] == '1') {
                var minimum = Math.min(x[i - 1][j], x[i - 1][j - 1]);
                minimum = Math.min(minimum,x[i][j - 1]);
                x[i][j] = minimum + 1;
            } else {
                x[i][j] = 0;
            }
        }
    }
    console.log(x);
    var max = 0;
    //get maximal length
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < b; j++) {
            if (x[i][j] > max) {
                max = x[i][j];
            }
        }
    }
    return max;
}
   
 
/* Driver code */
let M = [[0, 1, 1, 0, 1],
         [1, 1, 0, 1, 0],
         [0, 1, 1, 1, 0],
         [1, 1, 1, 1, 0],
         [1, 1, 1, 1, 1],
         [0, 0, 0, 0, 0]];
                     
printMaxSubSquare(M);