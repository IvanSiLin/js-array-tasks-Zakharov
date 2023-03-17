const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
};

// BEGIN
export const getTheNearestLocation = (locations, point) => {
    
    

    if (locations.length === 0) {

        return null;
    }
    
    let item = 0;
    let result = Infinity;
    let resultCoord = 0;
    let resultLocation = '';

    for (item of locations) {

        let [name, coord] = item;
        
        if (getDistance(coord, point) <= result) {

            result = getDistance(coord, point);
            resultCoord = coord;
            resultLocation = name;
        }
    }

    return [resultLocation, resultCoord]
}

export default getTheNearestLocation;
// END
