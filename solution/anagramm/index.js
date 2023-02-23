
/*
    *Anagrams are words that have the same characters in the same quantity. This means that two strings are anagrams if we can rearrange one to get the other.
*/

//!Method 1
function anagramWithRegexs(myStr1,myStr2) {
    //?first we remove any non-alphabet character using regex and convert the strings to lowercase
    myStr1 = myStr1.replace(/[^\w]/g, "","").toLowerCase();
    myStr2 = myStr2.replace(/[^\w]/g, "","").toLowerCase();

    //?get the both character map from getCharacterMap function
    const charMap1 = getCharMap(myStr1)//!if variable sending to function parametres,not important using var,let,const
    const charMap2 = getCharMap(myStr2)

    for(let char in charMap1){
        if(charMap1[char] !== charMap2[char]){
            return false
        }
    }
    return true
}

function getCharMap(string) {
    //?We define an empty object that will hold key-value pairs
    let charMap = {}
    
    //?We loop through each character in the string.If the character already
    //?exists in the map,increase the value count,otherwise add it to map with a value of 1
    for(let char of string) {
        charMap[char] = charMap[char]+1 || 1 //=> for example => charMap{'a':3}
    }
    return charMap

}

// -------------------------------------------------------------------------------------------------------------------------------------------------------


//!Method 2
function anagramWithReverse(myStr1,myStr2) {
    //?First,we remove any non-alphabet character using regex and convert the string to lowercase
    myStr1 = myStr1.replace(/[^\w]/g, '').toLowerCase()
    myStr2 = myStr2.replace(/[^\w]/g, '').toLowerCase()

    return sortString(myStr1) === sortString(myStr2)// === checkec is type and value equality

}


function sortString(string){
    return string.split('').sort().join('')
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------

//!Method 3
function anagramWithArraySplice(myStr1,myStr2){
    //?First,we remove any non-alphabet character using regex and convert the string to lowercase
    myStr1 = myStr1.replace(/[^\w]/g, '').toLowerCase()
    myStr2 = myStr2.replace(/[^\w]/g, '').toLowerCase()

    //?Next,we check if the lengths of strings are eqaul.If they are anagrams,they will have the same length
    if(myStr1.length !== myStr2.length){
        return false
    }
        let arr2 = myStr2.split('')
        for(let char of myStr1){
            if(!myStr2.includes(char)){
                return false
                break
            }
            else{
                arr2.splice(arr2.indexOf(char),1)//if give number 1,it deletes itself
            }
        }
    return true
}

