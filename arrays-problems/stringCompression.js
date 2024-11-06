// Implement a method to perform basic string compression using the counts of repeated characters. 

function stringCompression(string) {
    let compressedString = '';
    let count = 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            count++
        } else {
            compressedString += string[i] + count
            count = 1
        }
    }
    return compressedString.length >= string.length ? string : compressedString
}

console.log(stringCompression('aaaabcccddd'))