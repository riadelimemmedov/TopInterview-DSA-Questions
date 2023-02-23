//!Node
class Node{
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}

//!LinkedList
class LinkedList{
    constructor(){
        this.head = null//first node == this.head,this.head returns a node
    }

    insertFirst(data){//change node order
        this.head = new Node(data,this.head)//head==next
        //or
        //this.head = this.insertAt(data,0)
    }

    getSize(){
        let counter = 0
        let node = this.head

        while(node){
            counter++
            node = node.next
        }
        return counter
    }

    getFirst(){
        //return this.head
        //or
        return this.getAt(0)
    }

    getLast(){
        // if(!this.head){
        //     return null
        // }

        // let counter = 0
        // let node = this.head
        // while(node){
        //     if(!node.next){//if
        //         return {node,counter}//return current node
        //     }
        //     else{
        //         node = node.next
        //     }
        // counter++
        // }
        
        //or

        return this.getAt(this.getSize()-1)
    }

    clear(){
        this.head = null
    }

    removeFirst(){
        if(!this.head){
            return
        }
        this.head = this.head.next
    }

    removeLast(){
        if(!this.head){
            return
        }
        
        if(!this.head.next){//if length of list == 1
            this.head = null
            return
        }

        let previous = this.head
        let node = this.head.next
        while(node.next){//if node.next==null break out while loop
            previous = node
            node = node.next
        }
        previous.next = null
    }

    insertLast(data){
        const last = this.getLast()
        if(last){
            last.next = new Node(data)
        }
        else{
            this.head = new Node(data)
        }
    }

    getAt(index){
        let counter = 0
        let node = this.head
        while(node){
            if(counter==index){
                return node
            }
            //else
            counter++
            node = node.next
        }
        return null
    }

    removeAt(index){
        if(!this.head){
            return 
        }
        if(index===0){
            this.head = this.head.next
            return
        }

        const previous = this.getAt(index-1)
        if(!previous || !previous.next){//previous.next => last element next value
            return
        }
        previous.next = previous.next.next
    }

    insertAt(data,index){//Note => IF index is out of bounds,add the node to the end of the list,if given index not found add element very end of the list
        if(!this.head){
            this.head = new Node(data)
            return
        }
        if(index===0){
            this.head = new Node(data,this.head)
            return
        }
        const previous = this.getAt(index-1) || this.getLast()
        const node = new Node(data,previous.next)
        previous.next = node
    }

    forEach(fn){
        let node = this.head
        let counter = 0
        while(node){
            fn(node,counter)
            node = node.next
            counter++
        }
    }

    *[Symbol.iterator](){
        let node = this.head
        while(node){
            yield node//return node withoud blocked process
            node = node.next
        }
    }
}

const linketlist = new LinkedList()
linketlist.insertFirst('Hello')
linketlist.insertFirst('Car')
linketlist.insertFirst('MacBook')
linketlist.insertAt('Tesla',2)

module.exports = LinkedList