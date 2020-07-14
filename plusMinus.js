function plusMinus(arr) {
    var postiveNumbers = 0
    var negativeNumber =0
    var zero = 0

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            postiveNumbers ++
        }else if(arr[i] < 0){
            negativeNumber ++
        }else{
            zero ++
        }
    }

    console.log(postiveNumbers/arr.length)
    console.log(negativeNumber/arr.length)
    console.log(zero/arr.length)
}