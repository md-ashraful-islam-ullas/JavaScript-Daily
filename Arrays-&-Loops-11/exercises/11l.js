function minmax(array) {

    // for 11m.js
    if (array.length === 0) {
        return {min: null, max: null};
    }

    if (array.length === 1) {
        return {min: array[0], max: array[0]};
    }
    // -----------

    const obj = {min: Infinity, max: -Infinity};

    for (let i = 0; i < array.length; i++) {
        if (obj.min >= array[i]) obj.min = array[i];
        if (obj.max <= array[i]) obj.max = array[i]; 
    }

    return obj;
}

console.log(minmax([8]));

