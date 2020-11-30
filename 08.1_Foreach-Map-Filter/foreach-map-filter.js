// ---- forEach ----

function doubleValues(arr) {
   let newArray = []; 
   arr.forEach(function(val) {
        newArray.push(val * 2);    
    })
    return newArray;
}

function onlyEvenValues(arr){
    let newArray = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) {
           newArray.push(val);
        } 
    })
    return newArray;
};

function showFirstAndLast(arr){
    let newArray = [];
    arr.forEach(function(val) {
        newArray.push(`${val[0]}${val[val.length-1]}`);
    })
    return newArray;
}

function addKeyAndValue(arr, key, value){
    arr.forEach(function(val) {
        val[key] = value;
    })
    return arr;
}

function vowelCount(str){
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const newArray = Array.from(str);
    let obj = {};
    newArray.forEach(function(char) {
        charLowerCase = char.toLowerCase();
        if (vowel.includes(charLowerCase)) {
          if (charLowerCase in obj) {
              obj[charLowerCase]++;
          } else {
              obj[charLowerCase] = 1;
          }
        }
    });
    return obj;
}

// ---- map ----

function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

function valTimesIndex(arr) {
    return arr.map(function(val, index) {
        return val * index;
    });
}

function extractKey(arr, key) {
    return arr.map(function(val) {
        return val[key];
    });
}

function extractFullName(arr) {
    return arr.map(function(val) {
        return `${val.first} ${val.last}`;
    });
}

// ---- filter ----

function filterByValue(arr, key) {
    return arr.filter(function(val) {
        if (key in val) {
            return val;
        }
    });
}

function find(arr, searchValue) {
    return arr.filter(function(val) {
        return val === searchValue 
    })[0];
}

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
        return val[key] === searchValue;
    })[0];
}

function removeVowels(str) {
    let newArray = Array.from(str);
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    return newArray.filter(function(char) {
        charLowerCased = char.toLowerCase();
        if (vowel.includes(charLowerCased)) {
            charLowerCased = ''
        }
        return charLowerCased;
    }).join('').toString().toLowerCase();
}

function doubleOddNumbers(arr) {
    return arr.filter(function(val) {
        return val % 2 !== 0
        }).map(function(val){
        return val * 2;
    });
}
