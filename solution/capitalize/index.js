//!Method 1
function capitalizeString(str){
    result = str[0].toUpperCase();
    for(let i=1;i<str.length;i++){
        if(str[i-1] == " "){// if find gaps 
            result+=str[i].toUpperCase();
        }
        else{
            result+=str[i].toLowerCase()
        }
    }
    return result
}
console.log(capitalizeString('hi, how are you?'))


//!Method 2
function capitalizeString(str){
    const words = []
    for(let word of str.split(" ")){
        words.push(word[0].toUpperCase()+word.slice(1))
    }
    return words.join(' ')
}
console.log(capitalizeString('hello, jack'))


//!Method 3
function capitalizeString(str){
    const words = str.split(" ")
    for(let i=0;i<words.length;i++){
        words[i] = words[i].charAt(0).toUpperCase()+words[i].slice(1)
    }
    return words.join(" ")
}
console.log(capitalizeString('hello ,my name is jack'))



