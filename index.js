function wrongGuessCount(word, guesses){
    return guesses
    .filter(letter => word.indexOf(letter) <0)
    .length
}
console.log('wrong guesses:', wrongGuessCount("hello", ['k', 'l', 'd']), 'should be:', 2)


function showGuess(word, guesses){
    return word
    .split('')
    .map(letter => guesses.indexOf(letter) < 0 ? "_" : letter)
    .join(' ')
}

console.log('show guess 1:', showGuess('hello', ['l']), 'should be:', '_ _ l l _')
console.log('show guess 2:', showGuess('hello', ['l', 'a', 'e']), 'should be:', '_ e l l _')

function isWinner(word, guesses){
    return word
    .split('')
    .filter(letter => guesses.indexOf(letter) >= 0)
    .length === word.length;
}

console.log('winner 1:', isWinner('hello', ['e', 'x']), 'should be:', false)
console.log('winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']), 'should be:', true)