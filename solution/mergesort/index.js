//!mergeSort
function mergeSort(arr){
    if(arr.length == 1){
        return arr
    }

    const center = Math.floor(arr.length / 2)
    const left = arr.slice(0,center)
    const right = arr.slice(center)

    return merge(mergeSort(left),mergeSort(right))
}


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
console.log(mergeSort([22,5,18,4]))
