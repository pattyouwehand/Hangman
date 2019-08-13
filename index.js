function wrongGuessCount(word, guesses){
    return guesses
    .filter(letter => word.indexOf(letter) <0)
    .length
}

function showGuess(word, guesses){
    return word
    .split('')
    .map(letter => guesses.indexOf(letter) < 0 ? "_" : letter)
    .join(' ')
}

function isWinner(word, guesses){
    return word
    .split('')
    .filter(letter => guesses.indexOf(letter) >= 0)
    .length === word.length;
}

function ignoreDuplicateLetters(word, guesses){
    return word
    .split('')
}

const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})

function next(word, guesses) {
    let numWrongGuesses = wrongGuessCount(word, guesses);
    if(numWrongGuesses === 6){
        console.log("You've lost!")
    }else if(isWinner(word, guesses)){
        console.log("You won!")
    }else{
        rl.question('next letter? ', answer => {
            const letter = answer.trim()[0];
            console.log('player wrote:', answer)
            next(word, guesses.concat([ letter ]));
        });
    }    
}

next('hello', [])


//node . will run your file in terminal
//console.log('winner 1:', isWinner('hello', ['e', 'x']), 'should be:', false)
//console.log('winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']), 'should be:', true)
//console.log('show guess 1:', showGuess('hello', ['l']), 'should be:', '_ _ l l _')
//console.log('show guess 2:', showGuess('hello', ['l', 'a', 'e']), 'should be:', '_ e l l _')
//console.log('wrong guesses:', wrongGuessCount("hello", ['k', 'l', 'd']), 'should be:', 2)
