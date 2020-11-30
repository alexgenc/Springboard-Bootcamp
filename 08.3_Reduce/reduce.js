function extractValue(arr, key) {
    return arr.reduce(function(accumulator, nextValue) { 
       accumulator.push(nextValue[key]);
       return accumulator;
    }, []);
}

function vowelCount(str) {
    vowels = ['a', 'e', 'i', 'o', 'u'];
    newArray = Array.from(str);
    return newArray.reduce(function(accumulator, nextValue) {
        let nextValueLower = nextValue.toLowerCase();
            if (vowels.includes(nextValueLower)) {
                if (nextValueLower in accumulator) {
                    accumulator[nextValueLower]++;
                } else {
                accumulator[nextValueLower] = 1;
                }
            }
            return accumulator;
        }, {})   
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accumulator, nextValue, index) {
        accumulator[index][key] = value;
        return accumulator;
    }, arr)
}

function partition(arr, callback) {
    return arr.reduce(function(accumulator, nextValue) {
        if(callback(nextValue)) {
            accumulator[0].push(nextValue);
        } else {
            accumulator[1].push(nextValue);
        }
        return accumulator;
    }, [[], []]);
}
