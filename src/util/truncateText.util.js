


/**
 * @desc truncates string to certain length of character. default is 325.
 * @returns { Array }
 * @param {String} stringToBeTruncated
 */
export const truncateText =  (stringToBeTruncated,  length ) => {
  
    if (stringToBeTruncated.length >= 325) {
        return stringToBeTruncated.substring(0, 325) + "..."
    }

    return stringToBeTruncated
};
