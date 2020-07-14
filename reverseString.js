const reverse = (str = String()) => {
    if(!str.length){
        return str
    }
    return reverse(str.substring(1)) + str.charAt(0)
}

console.log(reverse("BASIC"));