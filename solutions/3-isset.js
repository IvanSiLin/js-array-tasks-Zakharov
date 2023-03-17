// BEGIN
export const get = (array, i, def = null) => {
    
    if (i >= 0 && i < array.length) {

        return array[i];
    } else {

        return def;
    }
}

export default get;
// END