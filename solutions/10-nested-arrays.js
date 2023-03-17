// BEGIN
export const getSuperSeriesWinner = (washers) => {

    let canada = 0;
    let ussr = 0;
    let item = 0;

    for (item of washers) {

        if (item[0] > item[1]) {

            canada ++;
        } else if (item[0] < item[1]) {

            ussr ++;
        }
    }
    
    if (canada < ussr) {

        return 'ussr';
    } else if (canada > ussr) {

        return 'canada';
    } else {

        return null;
    }
}

export default getSuperSeriesWinner;
// END