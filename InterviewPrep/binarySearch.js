//function is returning the path ways to the value
//the path ways are the middle numbers during division
const binarySearch(arr, value) => {
    let start = 0;               //start index
    let end = arr.length-1       //last index
    let mid = Math.floor(end/2)  //middle index
    let pathWay = []

    while (arr[mid] !== value){
        pathWay.push(arr[mid])
        if(end < start) {
            return 'Value Not Found'
        }
        if (arr[mid] > value){
            end = mid - 1;
            mid = start + Math.floor((end - start) / 2)
        } else {
            start = mid + 1
            mid = start + Math.floor((end - start) / 2)
        }
    }
    pathWay.push(arr[mid])

    return pathWay
    
}