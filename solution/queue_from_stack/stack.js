
//!Stack
class Stack {
    constructor() {
        this.data = []
    }

    push(record) { //add to element last point to list
        this.data.push(record)
    }

    pop() { //delete last element from array
        return this.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1]
    }
}
module.exports = Stack