
//!Method 1
function arrayChunkComlicatedMethod(myArr,size){
    const chunked = []
    
    for(let element of myArr){
        const last = chunked[chunked.length-1]
        
        if(!last || last.length === size){
            chunked.push([element])
        }
        else{
            last.push(element)
        }
    }
    return chunked
}
console.log(arrayChunk([1,5,10,12],2))


//!Method 2
function chuckArraySliceMethod(myArr,size){
    const chunked = []
    let index = 0
    while(index<myArr.length){
        chunked.push(myArr.slice(index,size+index))
        index+=size
    }
    return chunked
}
console.log("chuckArraySliceMethod ", chuckArraySliceMethod([1,5,10,12,65,75,80,10,12],4))
