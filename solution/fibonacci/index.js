
//!Method 1 with iterative solution
function fib(n){
    var fib = [0,1]
    
    for(let i=2;i<=n;i++){
        fib[i] = fib[i-2]+fib[i-1]
    }
    return fib[fib.length-1]//return last element at the array
}
console.log("fib ", fib(10))



//!Method 2 with memoization
function memoize(fn){
    const cache = {}
    let show  =  function(...args){//fn function with arguments
        if(cache[args]){
            return cache[args]
        }
        const result = fn.apply(this,args)
        cache[args] = result
        return result
    }
    console.log('show first called', show(6))
    console.log('show second called ', show(6))

}

function slowFib(n){
    if(n<2){
        return n
    }
    return slowFib(n-1)+slowFib(n-2)
}
const fib = memoize(slowFib)
