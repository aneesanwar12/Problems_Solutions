// Check permutations

function checkPermutation(string1, string2) {
    if (string1.length !== string2.length) {
        return false
    }
    const characterCount = {}
    for (let i = 0; i < string1.length; i++) {
        characterCount[string1[i]] = (characterCount[string1[i]] || 0) + 1
    }

    for (let j = 0; j < string2.length; j++) {
        if (!characterCount[string2[j]]) {
            return false
        }
        characterCount[string2[j]]--
    }
    return Object.values(characterCount).every((value) => value === 0)
}

console.log(checkPermutation('abcde', 'abdec'))