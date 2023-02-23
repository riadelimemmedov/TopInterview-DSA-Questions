/*
 *Binary search is a search algorithm that is designed to search an element in a sorted array. This binary search is also a well-known example of the "divide and conquer approach".
*/


//!Node
class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }

    add(data) { //Given some data,create a new node and add it to the current node's 'children' array
        this.children.push(new Node(data))
    }

    remove(data) { //Given some data,look at each child of the current node and remove any node with data === want_to_delete_data
        this.children = this.children.filter(node => {
            return node.data !== data
        })
    }
}



//!Tree
class Tree {
    constructor() {
        this.root = null
    }

    traverseBF(fn) {
        const arr = [this.root]; //root
        while (arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn){
        const arr = [this.root]
        while(arr.length){
            const node  = arr.shift()
            arr.unshift(...node.children)
            fn(node)
        }
    }

}

const words = []
const tree = new Tree()
tree.root = new Node(20)
tree.root.add(42)
tree.root.add(55)
tree.root.add(58)
tree.root.add(62)

tree.traverseBF(node => {words.push(node.data)})//Same thing to Depth First Search



