/* challenge 4: make a multiplication grid from 1x1 ro 10x10


const listNums = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
]

for (let i in list) {
}
console.log('list',listNums[0][1][2][3][4][5][6][7][8][9]) */

function multiGrid(x,y) {

    let multi = ''

    for(let i = 1; i < y+1; i++) {
        for(let j = 1; j < x+1; j++) {
            multi += i*j+'    '
            
          }
         multi += `\n`
         
    }

return multi
}


console.log(`OUTPUT:\n${multiGrid(10,10)}`)
