//!Method 1
function getPyramid(n){
    for(let i=1;i<=n;i++){
        //log spaces
        for(let j=1;j<=n-i;j++){
            process.stdout.write(' ')
        }
        for(let k=0;k<2*i-1;k++){
            process.stdout.write('*')
        }
        console.log()//create new line and access new line or used => process.stdout.write('\n')
    }
}
getPyramid(3)


//!Method 2
function getPyramid(n){
    const column_midpoint = Math.floor((2*n-1)/2)//return column midpoint
    for(let row=0;row<n;row++){
        let level = ''
        for(let column=0;column<2*n-1;column++){
            if(column_midpoint-row<=column && column_midpoint+row>=column){
                level += '#'
            }
            else{
                level += ' '
            }
        }
        console.log(level)
    }
}
getPyramid(3)


//!Method 3
function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        // console.log(level);
        return pyramid(n, row + 1);
    }

    else{
        const midpoint = Math.floor((2 * n - 1) / 2)
        let add;

        if (midpoint - row <= level.length && midpoint + row >= level.length) {//check left and right side equality
            add = '#';
        } else {
            add = ' ';
        }
        pyramid(n, row, level + add);
    }
    }
pyramid(5,0,'')