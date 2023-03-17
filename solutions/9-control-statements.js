// BEGIN
export const getTotalAmount = (array, money) => {

    let result = 0;
    let item = 0;
    
    for (item of array) {

        if (item.split(' ')[0] === money) {
            
            result += +item.split(' ')[1];
        }
    }
    return result;
}
export default getTotalAmount;
// END