const data = [5,4,2,3,1,9,25]


const bubbleSort = (arr) => {
  let swap = 0;
  const length = arr.length
  for(let i=0; i<length; i++){
    for(let j=0; j<length; j++){
      if(arr[j] > arr[j+1]){
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        swap++
      }
    }
  }
  return arr
}

bubbleSort(data)