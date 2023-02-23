/*                  
    *Weave receives two queues as arguments and combines the contents of each into a new, 
    //*third queue. The third queue should contain the alterating content of the two queues. 
    //*The function should handle queues of different lengths without inserting ‘undefined’ into the new one
*/

//!Queue
class Queue {
    constructor(){
        this.items = [];
    }

    //unshift() => adds a the beginning of the array
    add(item){
        this.items.unshift(item)
    }

    //pop() => removes last element of an array
    remove(item){
        return this.items.pop()
    }

    //return last element of an array,well know this element first append to array
    peek(){
        return this.items[this.items.length-1]
    }
}
module.exports = Queue