/* 
    *Javascript Queue is one of the linear data structures used to store data in the memory. 
    *The queue is a linear data structure that stores data sequentially based on the First In First Out (FIFO) manner and is also known as the First Come First Served data structure. The queue has two ends, namely- rear and front. 
    *The data or an element is inserted from the rear end, on the other hand, elements are removed from the front end.
*/

//!Queue With Array Default JavaScript Method => Method 1

//?Initializing queue
var queue = []

// //?Inserting values into to queue
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
queue.push(5)


// //?Removing first element form queue using array method : shift()
var remove_element = queue.shift()

// //?We can check the if the queue is empty or not using the array.length method
if(queue.length){
    console.log('The queue is not empty')
}
else{
    console.log('The queue is empty')
}



//------------------------------------------------------------------------------------------------------------------------------------------------



//!Queue With Class Object => Method 2
class Queue{
    constructor(){
        this.items = {}
        this.front = 0
        this.rear = 0
    }

    enqueue(item){//add item to object
        this.items[this.rear] =  item
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++

        return item
    }

    peek(){//return last added element at object or array,it allows us to kind of peek at the next element that is about to come out the queue(the next one to be returned)
        return this.items[this.front]
    }

    get size(){//getting the property value at class object
        return this.rear - this.front
    }

    isEmpty(){
        return this.rear==0
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(15)
queue.enqueue(34)
queue.enqueue(18)
queue.enqueue(22)

var removed_element = queue.dequeue()

var top_element = queue.peek()

var queue_length = queue.size




//------------------------------------------------------------------------------------------------------------------------------------------------



//!Queue With Class and JavaScript queue methods => Method 3
class Queue{
    constructor(){
        this.data = []
    }

    add(record){
        this.data.unshift(record)
    }

    remove(){
        return this.data.pop()
    }

    returnAllData(){
        return this.data
    }
}

const newQueue = new Queue()
newQueue.add(1)
newQueue.add(2)
newQueue.add(3)
newQueue.add(4)
newQueue.add(5)


newQueue.remove()
newQueue.remove()


//------------------------------------------------------------------------------------------------------------------------------------------------


//!Queue with helper function => Method 4
class Queue{
    constructor(){
        this.items = []
    }
    
    //Implementing various methods of javascript queue:

    //1 => adding element to the queue
    enqueue(item){
        this.items.push(item)
    }

    //2 => removing element from the queue
    dequeue(){
        //checking if the queue is empty or not before removing it
        if(this.isEmpty()){
            return 'Queue is empty:underflow';
        }
        return this.items.shift()
    }

    //3 => returning the front element of
    front(){
        //checking if the is empty or not!
        if(this.isEmpty()){
            return 'Queue is empty!'
        }
        return this.items[0]
    }

    //4 => returning true if the queue is empty
    isEmpty(){
        return this.items.length == 0
    }

    //5 => printing the queue
    printQueue(){
        var queue = ''
        for(var i = 0;i < this.items.length;i++){
            queue+=this.items[i] + " "
        }
        return queue
    }

    //6 => getting the size of queue
    size(){
        return this.items.length
    }
}

//creating object of the Queue class
var queue = new Queue()

//adding elements to the queue
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

//printing the current queue
console.log('the current queue is ',  queue.printQueue())

//printing the top element of the queue
var top_element = queue.front()
console.log('top element is ', top_element)

//printing the size of the queue
var size = queue.size()
console.log('the size of the queue is ', size)

//removing elements from queue
var removed_element = queue.dequeue()
console.log('Removed element is ',  removed_element)
removed_element = queue.dequeue()
console.log('Removed element is ', removed_element)

//print the size of the queue
var size = queue.size()
console.log('the size of the queue is ', size)


//------------------------------------------------------------------------------------------------------------------------------------------------


//!Queue with weave function
const Queue = require('./weave.js');

function weave(sourceOne,sourceTwo) {
    console.log('Source One ', sourceOne)
    console.log('Source Two ', sourceTwo)

    const q = new Queue()

    while(sourceOne.peek() || sourceTwo.peek()) {
        if(sourceOne.peek()){
            console.log('SourceOne peek value ', sourceOne.peek())
            q.add(sourceOne.remove());
        }
        if(sourceTwo.peek()){
            console.log('SourceTwo peek value ', sourceTwo.peek())
            q.add(sourceTwo.remove())
        }
    }
    return q
}


const queueOne = new Queue()
queueOne.add(1)
queueOne.add(2)

const queueTwo = new Queue()
queueTwo.add('Hi')

const combinedQueue = weave(queueOne,queueTwo)
console.log('combinedQueue list', combinedQueue)
