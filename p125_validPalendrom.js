let s = "A man, a plan, a canal: Panama"

const isPalindrome = (s) =>{
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let low = 0
    let high = s.length - 1

    for (let i = 0; i < s.length; i++) {
        if(s[low] == s[high]){
            low++
            high--
        }else{
            return false
        }
    }
    return true

}

let result = isPalindrome(s)

console.log(result);
