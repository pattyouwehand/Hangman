function wrongGuessCount(word, guesses){
    return guesses
    .filter(letter => word.indexOf(letter) <0)
    .length
}
console.log('wrong guesses:', wrongGuessCount("hello", ['k', 'l', 'd']), 'should be:', 2)