const bubbleSort = (arr)=>{
    for (let i = 0; i < arr.length -  1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {   
            if(arr[j] > arr[j + 1]){
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }        
        }        
    }
    return arr
}
console.log(bubbleSort([1,45,565,3,4,45,23,456,75,34,2,-4,78]));