function diagonalDifference(arr) {
    var leftDiagonal = 0
    var rightDiagonal = 0

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(i === j){
                leftDiagonal += arr[i][j]
            }

            if(i + j === arr.length - 1){
                rightDiagonal += arr[i][j]
            }
        }
    }

    return Math.abs(leftDiagonal - rightDiagonal)
}

console.log()