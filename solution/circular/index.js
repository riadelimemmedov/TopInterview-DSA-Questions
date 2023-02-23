const linkList = require('./llinklist.js')


//!Method 1 Circular
function circular(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    //if fast null return false this function
    return false;
}

const linkedlist = new linkList.LinkedList()
const a = new linkList.Node('Apple')
const b = new linkList.Node('Hp')
const c = new linkList.Node('Asus')

linkedlist.head = a
a.next = b
b.next = c
c.next = b

console.log('MidPoint Calling ', circular(linkedlist))