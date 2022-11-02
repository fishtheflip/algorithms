// Quick sort 

// First Solution
const quickSort = (arr) =>{
    if(arr.length < 2){
        return arr
    }
    const pivot = arr[0]
    const lessArr = []
    const greaterArr =[]

    for (let i = 1; i < arr.length; i++) {
        if(arr[i]<=pivot){
            lessArr.push(arr[i])
        } else {
            greaterArr.push(arr[i])
        }
    }
    return [...quickSort(lessArr), pivot, ...quickSort(greaterArr)]
}
console.log(quickSort([1]))
console.log(quickSort([2]))
console.log(quickSort([1,3]))
console.log(quickSort([3,3,5,4,6,7,5,3,2,2,4,5,6,7,4,32,234,56,86,32,1,3,5,7]))

// Second Solution
const quickSortSec = (arr) =>{
    if(arr.length < 2){
        return arr
    }
    const pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr[pivotIndex]
    const lessArr = []
    const greaterArr =[]

    for (let i = 1; i < arr.length; i++) {
        if(i === pivot){
            continue
        }
        if(arr[i]<=pivot){
            lessArr.push(arr[i])
        } else {
            greaterArr.push(arr[i])
        }
    }
    return [...quickSort(lessArr), pivot, ...quickSort(greaterArr)]
}
console.log(quickSortSec([1]))
console.log(quickSortSec([2]))
console.log(quickSortSec([1,3]))
console.log(quickSortSec([3,3,5,4,6,7,5,3,2,2,4,5,6,7,4,32,234,56,86,32,1,3,5,7]))