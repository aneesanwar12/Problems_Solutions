// Implement an algorithm to determine if a string has all unique characters.

function determineUniqueCharacters(string) {
    for (let i = 0; i < string.length; i++) {
        let occurrences = 0
        for (let j = i; j < string.length; j++) {
            if (string[i] === string[j]) {
                occurrences++
            }
        }
        if (occurrences > 1) {
            return false
        }
    }
    return true
}

console.log(determineUniqueCharacters('abcdefgha'))