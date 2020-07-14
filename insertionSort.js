const order = (arr) => {
    var currentValue, i, j;
    var n = arr.length

    for(i = 1; i < n; i++){
        currentValue = arr[i]
        j = i - 1

        while(j >= 0 && arr[j] > currentValue){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = currentValue
    }

    return arr
}

console.log(order([5,3,1,8,7483,0,465,2,6,7]));