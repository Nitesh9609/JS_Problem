let arr1 = [1, 2, 2, 1]
let arr2 = [2, 2]

const intersectionArr = (arr1, arr2) => {

    let result = []


    arr1.sort()
    arr2.sort()


    for (let i = 0; i < arr1.length; i++) {


        if (arr2.includes(arr1[i])) {
            result.push(arr1[i])
        }


    }

    return Array.from(new Set(result))



}

let result = intersectionArr(arr1, arr2)
console.log(result);
