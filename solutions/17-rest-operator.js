// BEGIN
export const getMax = (array) => {

    if (array.length === 0) {

        return null;
    }

    let max = array[0];
    let item = 0;
    
    for (item of array) {

        if (item >= max) {

            max = item;
        }
    }
    return max;
}

export default getMax;
// END