function multiply(first, second) {
    if ((typeof first !== 'number') || (typeof second !== 'number')) {
        return null;
    } else {
        return first * second;
    }
}

let multiplyBy10 = multiply.bind(null, 10);













