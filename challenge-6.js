//challenge 6: given a string check if it is a palindrome.


const palinWord = 'racecars'

function palinCheck(check) {
    let checkAgainst=check 
    for (let i in check) { 
       if(checkAgainst[i] != check[check.length-1-i]) return false //compares the word against itself
    }
   return true
}


console.log(`The word ${palinWord} is a palindrome?: ${palinCheck(palinWord)}`) //prints the response
