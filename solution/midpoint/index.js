const LinkList = require('./linklist.js')


//!Method 1
function midPoint(list){
    let slow = list.getFirst()
    let fast = list.getFirst()

    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

const linkedlist = new LinkList()
linkedlist.insertFirst('Hello')
linkedlist.insertFirst('Car')
linkedlist.insertFirst('MacBook')
linkedlist.insertFirst('Hp')

console.log('MidPoint Calling ', midPoint(linkedlist))