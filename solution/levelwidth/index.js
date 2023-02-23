const Node = require('./node.js')


//!levelWidth
function levelWidth(root){
    const arr = [root,'s']
    const counters = [0]

    while(arr.length>1){
        const node = arr.shift()

        if(node === 's'){
            counters.push(0)
            arr.push('s')
        }
        else{
            arr.push(...node.children)
            counters[counters.length - 1]++
        }
    }
    return counters
}

const root = new Node(20) 
root.add(0)
root.add(40)
root.add(-15)

root.children[0].add(12)
root.children[0].add(-2)
root.children[0].add(1)

root.children[2].add(-2)

levelWidth(root)