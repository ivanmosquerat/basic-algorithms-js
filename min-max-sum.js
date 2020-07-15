function miniMaxSum(arr) {

    var array = JSON.parse("[" + arr + "]");
    var total = 0
    var minValue = array[0] 
    var maxValue = array[0] 

    for(var i = 0; i < array.length; i++){

        if(minValue < array[i]){
            minValue = array[i]
        }

        if(maxValue > array[i]){
            maxValue = array[i]
        }

        total += array[i]
    }

    console.log(`${total - minValue} ${total - maxValue}`)  
}