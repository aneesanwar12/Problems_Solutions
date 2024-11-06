//Write a function to check if it is a permutation of a palidrome

function checkPalidromePermutation(string) {
    const characterCount = {};
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            characterCount[string[i]] = (characterCount[string[i]] || 0) + 1
        }
    }
    const oddValues = Object.values(characterCount).filter(item => item % 2 !== 0)
    return oddValues.length < 2
}



console.log(checkPalidromePermutation('taco cat'))
