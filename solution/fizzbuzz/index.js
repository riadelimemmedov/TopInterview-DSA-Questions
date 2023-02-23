//!Method 1
function fizzBuzz(number){
    if(number % 15==0){
        //Is the number multiple to 3 and 5?
        console.log('fizzbuzz')
    }
    else if(number % 3 == 0){
        //Is the number a multiple of only 3?
        console.log('fizz')
    }
    else if(number % 5 == 0){
        //Is the number a multiple of only 5?
        console.log('buzz')
    }
}
fizzBuzz(30)