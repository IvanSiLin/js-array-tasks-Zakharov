// BEGIN
export const makeCensored = (string, array) => {

    let result = [];
    let word = '';

    for (word of string.split(' ')) {

        array.indexOf(word) != - 1 ? result.push('$#%!') : result.push(word);
    }
    return result.join(' ');
}

export default makeCensored;
// END