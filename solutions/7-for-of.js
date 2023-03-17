// BEGIN
export const calculateAverage = (array) => {

    let sum = 0;
    let i = 0;
    let item = 0;
    
    if (array.length === 0) {

        return null;
    }
    

    for (item of array) {

        sum = sum + item;
        i++;
    }
    return sum / i;
}
export default calculateAverage;
// END