const Stack = require('./stack.js')


//!Queue
class Queue {
    constructor() {
        this.first = new Stack()
        this.second = new Stack()
    }

    add(record) {
        this.first.push(record)
    }

    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop())
        }

        const record = this.second.pop()

        while (this.second.peek()) {
            this.first.push(this.second.pop())
        }
        return record;
    }

    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop())
        }

        const record = this.second.peek()

        while (this.second.peek()) {
            this.first.push(this.second.pop())
        }

        return record
    }
}

const queue = new Queue()
queue.add('Js')
queue.add('Python')
queue.add('Go')

console.log('Call remove at queue ', queue.remove())
console.log('Call peek at queue ', queue.peek())