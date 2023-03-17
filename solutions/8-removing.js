// BEGIN
export const getSameParity = (array) => {

    let equality = Math.abs(array[0]) % 2;
    let newArray = [];
    let item = 0;

    for (item of array) {

        if (Math.abs(item % 2) === equality) {
            
            newArray.push(item);
        }
    }
    return newArray;
}
export default getSameParity;
// END