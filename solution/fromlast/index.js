const list = require('./linklist.js')

const newLinkList = new list.LinkedList()


//!Method 1
function fromLast(list, n) {
    let slow = list.getFirst()
    let fast = list.getFirst()

    while (n > 0) {
        fast = fast.next
        n--
    }

    console.log('fast value ', fast)

    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }
    return slow
}


newLinkList.insertLast('MacBook')
newLinkList.insertLast('Hp')
newLinkList.insertLast('Asus')
newLinkList.insertLast('Msi')
newLinkList.insertLast('Omen')
newLinkList.insertLast('Lenova')


console.log('Size of linklist  ', newLinkList.size())
console.log('Linklist Last Element ', newLinkList.getLast())
console.log('Linklist First Element ', newLinkList.getFirst())
console.log('Call FromLast Function ', fromLast(newLinkList, 3))