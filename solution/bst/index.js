/*
    *The binary search tree is an advanced algorithm used for analyzing the node, its left and right branches, which are modeled in a tree structure and returning the value. The BST is devised on the architecture of a basic binary search algorithm; hence it enables faster lookups, insertions, and removals of nodes. This makes the program really fast and accurate.
*/

//!Method 1
class Node{
    constructor(data){
        this.data = data//think of head value for start binary search tree
        this.left = null
        this.right = null
    }

    insert(data){
        //?Left Side
        if(data < this.data && this.left){
            this.left.insert(data)
        }
        else if(data < this.data){
            this.left = new Node(data)
        }
        //?Right Side
        else if(data > this.data && this.right){
            this.right.insert(data)
        }
        else if(data > this.data){
            this.right = new Node(data)
        }
    }

    contains(data){
        if(this.data == data){
            //?When finding value return node at the moment
            return this
        }

        //?Right side check
        if(data > this.data && this.right){
            return this.right.contains(data)
        }
        //?Left side check
        else if(data < this.data && this.left){
            return this.left.contains(data)
        }
        //?If not find sending value to function return null
        return null
    }
}

const node = new Node(10)
node.insert(15)
node.insert(8)
node.insert(4)
node.insert(2)
node.insert(20)
node.insert(22)
node.insert(18)
node.insert(1)

console.log('Call Contains', node.contains(20))


