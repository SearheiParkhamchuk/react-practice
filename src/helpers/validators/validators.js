export const requiredField = value => {
    if (value && value.trim()) {
        return;
    }
    return 'Field is required'
}

export const maxLength = length => value => {
    if (value && value.length > length) {
        return `Max length is ${length} symbols.`;
    }
}