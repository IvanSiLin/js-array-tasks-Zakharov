// BEGIN
export const bubbleSort = (array) => { 

    for (let j = array.length - 1; j > 0; j--) {

        for (let i = 0; i < j; i++) {
            
            if (array[i] > array[i + 1]) {

                let sort = array[i];
                array[i] = array[i + 1];
                array[i + 1] = sort;
            }
        }
    }
    return array;
}

export default bubbleSort;
// END