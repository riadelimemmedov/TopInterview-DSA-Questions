
//!Method 1
function get_reverse_JOIN(my_string){
    return my_string.split('').reverse('').join('')
}
console.log(get_reverse_JOIN('Greetings'))



//!Method 2
function get_reverse_NORMAL_LOOP(my_string){
    let reversedString = ''
    for(let i=my_string.length-1;i>=0;i--){
        console.log('i value for each loop ', i)
        reversedString+=my_string[i]
    }
    console.log('Reversed String Value ', reversedString)
}

get_reverse_NORMAL_LOOP('Hello JavaScript')



//!Method 3
function get_reverse_FOR_OF(my_string){
    let reversedString = ''
    for(let character of my_string){
        reversedString = character + reversedString
    }
    console.log('Reversed String Value ', reversedString)
}
get_reverse_FOR_OF('Hello')


//!Method 4
function get_reverse_REDUCE(my_string){
    return my_string.split('').reduce((rev,char)=>char+rev,'');
}
console.log(get_reverse_REDUCE('Python'))




