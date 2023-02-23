//?Find Vowels

var vowel_characters = ['a','ı','o','u','e','ə','i','ö','ü']


//!Method1
function isVowel(str) {
    let count = 0
    str.split('').forEach((str,index)=>{
        if(vowels_characters.includes(str[index].toLowerCase())){
            count+=1
        }
    })
    return count
}
console.log(isVowel('Hello JavAScript'))// => 5


//!Method 2
function isVowel(str){
    let count = 0
    for(let str of str.toLowerCase()){//if defined lists,advice to using for of statement,else used to object advice to using for in
        if(vowel_characters.includes(str)){
            count++
        }
    }
    return count
}
console.log(isVowel('Hello JavAScript'))// => 5


//!Method 3
function isVowel(str){
    const matches = str.match(/[aıoueəiöü]/gi)
    return matches ? matches.length :0
}
console.log(isVowel('Hello JavAScript')) // => 5