

//!Method 1
function printSteps(levels) {
    const char = '#'
    for (let row = 1; row <= levels; row++) {
        let step = ''
        for (let column = 1; column <= levels; column++) {
            if (column <= row) {
                step += char
            } else {
                step += ' '
            }
        }
        console.log('Step ', step)

    }
}
printSteps(5)


//!Method 2
function printSteps(levels){
    let chars = ''
    for(let i=0;i<levels;i++){
        let char = '#'.repeat(i+1) + "\n"
        chars+=char
    }
    console.log(chars.trim())
}
printSteps(3)


//!Method 3
function printSteps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        return steps(n, row + 1);
    }

    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
}
steps(5,2,'#')