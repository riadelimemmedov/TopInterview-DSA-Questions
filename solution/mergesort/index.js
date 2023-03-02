//!merge
function merge(left,right){
    const results = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift())
        }
        else{
            results.push(right.shift())
        }
    }
    return [...results,...left,...right]
}

console.log(merge([2,5],[18,20]))//note => define sorted array only