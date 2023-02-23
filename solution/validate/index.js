//!Method 1
function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
        return false;
    }

    if (min !== null && node.data < min) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}

const node = require('./node.js')
const validateNode = new node(10)
validateNode.insert(8)
validateNode.insert(6)
validateNode.insert(5)

validateNode.insert(12)
validateNode.insert(20)
validateNode.left.left.right = new node(999);//error handle this here

console.log('validated node ', validate(validateNode))
