/* 
    *Data structures are the storages used to store and organize data according to a particular need or property. A stack is a type of Data structure in which elements are stored or removed from the stack on the LIFO property. LIFO stands for the Last in First Out: an element that is added in the last in the stack will be popped first. 
    *The array is used to implement the stack in JavaScript and three operations can be applied on the stack: push, pop, and peak/top.
*/


//!Stack Method 1
class Stack{
    constructor(){
        this.data = []
    }

    push(record){//add element end of the array or list
        this.data.push(record)
    }

    pop(){//delete last added element to list
        return this.data.pop()
    }

    peek(){//return last elemnt of array
        return this.data[this.data.length-1]
    }

    getData(){
        return this.data
    }
}

const newStack = new Stack()
newStack.push('Hello')
newStack.push('How are you')
newStack.push('Fine thanks')
newStack.push('good')

newStack.pop()
newStack.pop()


