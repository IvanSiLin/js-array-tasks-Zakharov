// BEGIN
export const swap = (items) => {
    if (items.length < 2) {

        return items;
    } else if (items.length === 2) {
        
        return items.reverse();
    } else {
        
        let firstItem = items[0];
        let lastItem = items[items.length - 1];
        return [lastItem, ...items.slice(1, items.length - 1), firstItem];
    }
};

export default swap;
// END