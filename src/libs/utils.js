function is_object (o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null;
};

function deep_clone (obj) {
    if (!is_object(obj)) {
        throw new Error('is not an object!');
    }

    let isArray = Array.isArray(obj);
    let cloneObj = isArray ? [] : {};
    for (let key in obj) {
        cloneObj[key] = is_object(obj[key]) ? deep_clone(obj[key]) : obj[key];
    }

    return cloneObj;
};


export default {
    deep_clone
}