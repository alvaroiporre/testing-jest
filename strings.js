const stringLength = (str) => {
    if(str.length < 1 || str.length > 10) {
        return 'error!';
    }
    return str.length;
}

const reverseString = (str) => str.split("").reverse().join("");

const capitalize = (str) => str.substring(0,1).toUpperCase() + str.substring(1, str.length);


module.exports = {stringLength, reverseString, capitalize};