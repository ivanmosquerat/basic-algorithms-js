function staircase(n) {
    var str = Array(n).fill(" ")

    for(var i = n - 1; i > - 1; i--){
        str[i] = "#"
        console.log(str.join(''))
    } 
}