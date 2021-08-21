function memoize(func) {
    const answers = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (!answers[key]) {
            answers[key] = func(...args);
        }
        return answers[key];
    }
}

function range(min, max) {
    let result = min;
    if (min > Number.MAX_SAFE_INTEGER || max > Number.MAX_SAFE_INTEGER) {
        result = BigInt(result)
        min = BigInt(min);
        max = BigInt(max);
        if (min > max) {
            [min, max] = [max, min];
        }
        for (let i = min + 1n; i < max + 1n; i += 1n) {
            result += BigInt(i);
        }
    } else {
        if (min > max) {
            [min, max] = [max, min];
        }
        min = Number(min);
        max = Number(max);
        if (isNaN(min) || isNaN(max)) throw new Error('min & max must be numbers');
        result = (max + min) / (2) * (max - min + 1);
    }
    return result;
}

const rangeMemo = memoize(range);

console.time('test 1');
console.log(rangeMemo(Number.MAX_SAFE_INTEGER + 10, Number.MAX_SAFE_INTEGER + 14));
console.timeEnd('test 1');
console.time('test 2');
console.log(rangeMemo(Number.MAX_SAFE_INTEGER + 10, Number.MAX_SAFE_INTEGER + 14));
console.timeEnd('test 2');

console.time('test 3');
console.log(rangeMemo(5, 7));
console.timeEnd('test 3');
console.time('test 4');
console.log(rangeMemo(5, 7));
console.timeEnd('test 4');
