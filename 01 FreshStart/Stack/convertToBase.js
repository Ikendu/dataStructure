const convertToBase = (num, base) => {
    let remStore = []
    let ans = []
    while (num > 0){
       let rem =  num % base
       remStore.push(rem)
       num = Math.floor(num / base)
    } 
    for(let i = 0; i < remStore.length; i++){
        ans.push(remStore.pop())
    }
    return ans
}

console.log(convertToBase(845, 2))