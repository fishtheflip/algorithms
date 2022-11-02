const quickSort = (arr)=>{
    return quickSortHealper(arr, 0, arr.length - 1)
}
const swap=(arr, left, rigth)=>{
    const temp = arr[left]
    arr[left] = arr[rigth]
    arr[rigth] = temp
}
const partition = (arr, left, rigth)=>{
    const pivot = arr[Math.floor((left+rigth) / 2)]
    while( left <= rigth){
        while(arr[left] < pivot){
            left++
        }
        while(arr[rigth] > pivot){
            rigth--
        }
        if( left <= rigth){
            swap(arr, left, rigth)
            left++
            rigth--
        }
    }
    return left
}
const quickSortHealper = (arr, left, rigth)=>{
    if(arr.length < 2){
        return arr
    }
    const index = partition(arr, left, rigth)
    if(left < index - 1){
        quickSortHealper(arr, left, index -1)
    }
    if(index < rigth){
        quickSortHealper(arr, index, rigth)
    }
    return arr
}
console.log(quickSort([2,3,2,43,4,65,7,32,54,8,53,3,2,33]));