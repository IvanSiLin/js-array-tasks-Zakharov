const _ = require("lodash"); 

// BEGIN
export const getSameCount = (array1, array2) => {
    
    return Array.from(new Set(_.intersection(array1, array2))).length;
}

export default getSameCount;
// END