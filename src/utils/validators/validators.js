export const requairedField = (value) => {
    if (value) return undefined;
    return 'Field is requaried';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength}`;
    return undefined;
}
