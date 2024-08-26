const validAnagram = (s, t) => {
    if (s.length !== t.length) {
      return false;
    }
  
    let hash = {};
  
    for (let i = 0; i < s.length; i++) {
      hash[s[i]] = (hash[s[i]] || 0) + 1;
    }
  
    for (let i = 0; i < t.length; i++) {
      if (hash.hasOwnProperty(t[i])) {
        hash[t[i]] = (hash[t[i]] || 0) - 1;
      } else {
        return false; // if t[i] is not in hash, it's not an anagram
      }
    }
  
    // Check if all values in hash are zero
    for (let key in hash) {
      if (hash[key] !== 0) {
        return false;
      }
    }
  
    return true;
  };
  
  let s = "anagram";
  let t = "nagaram";
  let result = validAnagram(s, t);
  console.log(result); // true