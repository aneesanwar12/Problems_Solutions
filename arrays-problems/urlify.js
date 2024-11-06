// URLify

function URLify(string, trueLength) {
    const arrayWithTrueLength = new Array(trueLength);
    for (let i = 0; i < trueLength; i++) {
        if (string[i] === ' ') {
            arrayWithTrueLength[arrayWithTrueLength.length] = "%20"
        } else {
            arrayWithTrueLength[arrayWithTrueLength.length] = string[i]
        }
    }

    return arrayWithTrueLength.join('')
}

const string = 'Mr John Smith      '
console.log(URLify(string, 13))