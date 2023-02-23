//!Method 1
function get_PALINDROM_NORMAL_LOOP(myStr){
    let len = myStr.length;
    var mid = Math.floor(len/2)

    for(var i=0;i<mid;i++){
        if(myStr[i] !== myStr[len-1-i]){//*right side increment index number,left side decrement index number,because index number must be collide
            return false
        }
        else{
            return true
        }
    }
}
console.log(get_PALINDROM_NORMAL_LOOP('civic'))


//!Method 2
function get_Palindrom_Reverse_Method(myStr){
    let reversed_text = myStr.split('').reverse('').join('')
    if(myStr == reversed_text){
        return true
    }
    else{
        return false
    }
}
console.log(get_Palindrom_Reverse_Method('civic'))



//!Method 3
function get_Palindrom_Every_Method(myStr){
    return myStr.split('').every((char,index)=>{//must be return keyword at eveyr function
        return char === myStr[myStr.length-1-index]
    })
}
console.log(get_Palindrom_Every_Method('racecar'))



