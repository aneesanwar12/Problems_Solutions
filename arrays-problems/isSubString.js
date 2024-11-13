// Check if one word is a rotation of another

function isSubString(string, subString) {

    if (string.length !== subString.length) return false

    return (string + string).includes(subString)
}

console.log(isSubString('waterbottle', 'terbottlewa'))