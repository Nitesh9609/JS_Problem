let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

const groupAnagram = (strs) => {

    let anagrams = {};
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        console.log(sortedStr);
        
        if (anagrams[sortedStr]) {
            anagrams[sortedStr].push(str);
        } else {
            anagrams[sortedStr] = [str];
        }
    }
    return Object.values(anagrams);

}

let result = groupAnagram(strs)

console.log(result);
