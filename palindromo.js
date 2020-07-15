const  palindrome = str =>  {
    return str === str.split('').join('')
}

console.log(palindrome("RECONOCER"))