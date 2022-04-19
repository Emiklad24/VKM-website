


/**
 * @desc truncates string to certain length of character. default is 325.
 * @returns { Array }
 * @param {String} stringToBeTruncated
 */
export const truncateText = (stringToBeTruncated, length) => {

    if (stringToBeTruncated.length >= length) {
        return stringToBeTruncated.substring(0, length) + "..."
    }

    return stringToBeTruncated
};
