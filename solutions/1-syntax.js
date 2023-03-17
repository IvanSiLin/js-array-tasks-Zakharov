// BEGIN (write your solution here)
export const getWeekends = (string) => {
    switch (string) {
        case 'long':
            return ['saturday', 'sunday'];
            break;
        case 'short':
            return ['sat', 'sun'];
            break;
        default:
            return ['saturday', 'sunday'];
            break;
    }
}
// END
