// BEGIN
const buildDefinitionList = (items) => {
    
    let result = '<dl>';
    let item = 0;

    if (items.length === 0 || items[0].length === 0) {

        return '';
    }
   
    for (item of items) {

        result = result + `<dt>${item[0]}</dt><dd>${item[1]}</dd>`
    }
    result = result + '</dl>'

    return result;
}

export default buildDefinitionList;
// END