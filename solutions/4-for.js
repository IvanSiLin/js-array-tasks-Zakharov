// BEGIN
 export const addPrefix = (names, prefix) => {

    let newArrays = [];
    let item = 0;
    
    for (item of names) {

        let newArray = prefix + ' ' + item;
        newArrays.push(newArray);
    }
    return newArrays;
}
export default addPrefix;
// END