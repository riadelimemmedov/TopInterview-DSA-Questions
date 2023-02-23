//!Method 1
function getMaxCharValue(myStr){
    const chars = {}
    let max=0
    let maxChar = ''

    for(let char of myStr){
        if(!chars[char]){
            chars[char] = 1
        }
        else{
            chars[char]++
        }
    }

    for(let char in chars){
        if(chars[char]>max){
            max=chars[char]
            maxChar = char;
        }
    }
}
getMaxCharValue('banana')