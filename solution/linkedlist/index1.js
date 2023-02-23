/*
    *The linked list is a linear data structure that stores information as a set of linearly connected nodes. Each node in this list contains data along with a pointer to another node. It can only be accessed in sequence, either from the beginning or from the end.

    *Like arrays, a Linked List is a linear data structure. Unlike arrays, linked list elements are not stored at a contiguous location; the elements are linked using pointers. They include a series of connected nodes. 
    *Here, each node stores the data and the address of the next node.

*/

//!Node method 1
class Node{
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}

//!LinkedList method 1
class LinkedList{
    constructor(){
        this.head = null//first node == this.head,this.head returns a node
    }

    insertFirst(data){//change node order
        //this.head = new Node(data,this.head)//head==next
        //or
        this.head = this.insertAt(data,0)
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
// console.log(linketlist.getAt(2))
//console.log('Size of linked list ', linketlist.getSize())
//console.log('First value at in node ', linketlist.getFirst())
//console.log('Last element in node', linketlist.getLast())
// console.log(linketlist.clear())
// console.log('Size of linked list ', linketlist.getSize())

// console.log(linketlist.head)
// console.log('call remove first element ', linketlist.removeFirst())
// console.log(linketlist.getLast())
// console.log('calling remove last element ', linketlist.removeLast())
// console.log(linketlist.getLast())
// console.log('last element list before calling inserLast ', linketlist.getLast())
// linketlist.insertLast('Bus')
// console.log('last element list after calling interLast', linketlist.getLast())
// console.log('find value at list given index ', linketlist.getAt(1))
// console.log('head vluye ', linketlist.head)
// console.log('last value and index value ', linketlist.getLast().counter)
// console.log('linklist ', linketlist.head)
// console.log('calling remove at function ', linketlist.removeAt(1))
// console.log('linklist ', linketlist.head)


