// BEGIN
export const calculateSum = (array) => {

    let result = 0;
    let item = 0;
    
    for (item of array) {

        if (item % 3 === 0) {

            result = result + item;
        }
    }
    return result;
}

export default calculateSum;
// END