
//!Method Divide and Conquer Method 1
function reverseNumber_DIVIDE_CONQUER(myNumber){
    let result = 0
    convertedNumber = Math.abs(myNumber)

    while(convertedNumber>0){
        right_last_element = convertedNumber%10
        result = result*10+right_last_element
        convertedNumber = Math.floor(convertedNumber/10)
    }
    console.log('Reversed number is ', myNumber<0 ? -Math.abs(result) : result)
}
reverseNumber(-15)


//!ReverseNumberJsMethod Method 2
function reverseNumberJsMethod(myNumber) {
    const reversed_number = myNumber.toString().split('').reverse().join('')
    return parseInt(reversed_number) * Math.sign(myNumber)
}
console.log(reverseNumberJsMethod(-165))