const data = [5,4,2,3,1,9,25]


const selectionSort = (arr) => {
  const length = arr.length
  for(let i=0; i<length; i++){
    for(let j=0; j<length; j++){
        if(arr[i]<arr[j]) {
           const temp = arr[i];
           arr[i] = arr[j]
           arr[j] = temp;
        }

      }
    }
    return arr
  }
  

selectionSort(data)