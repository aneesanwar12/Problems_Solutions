// Check the strings if both are one edit away

function isOneEditAway(string1, string2) {
    const string1Length = string1.length
    const string2Length = string2.length
    if (Math.abs(string1Length - string2Length) > 1) {
        return false
    }

    let edits = 0;
    let i = 0;
    let j = 0;

    while (i < string1Length && j < string2Length) {
        // console.log(string1[i], string2[j])
        if (string1[i] !== string2[j]) {
            edits++
            if (edits > 1) return false;

            if (string1Length > string2Length) {
                i++
            } else if (string2Length > string1Length) {
                j++
            } else {
                i++
                j++
            }
        } else {
            i++
            j++
        }
    }

    return edits <= 1
}



console.log(isOneEditAway("pale", "pale"));
console.log(isOneEditAway("pale", "bake"));