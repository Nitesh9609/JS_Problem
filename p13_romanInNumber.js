// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.


let s = 'MCMXCIV'

let romanInNumber = (s) => {

    let hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && hash[s[i]] > hash[s[i - 1]]) {
            total += hash[s[i]] - 2 * hash[s[i - 1]] 
            console.log(total);
        }
        else
            total += hash[s[i]]

    }
    return total
}

let result = romanInNumber(s)
console.log(result);
