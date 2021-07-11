const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const num1 = [99, 44, 6, 2];
// const num2 = [5,9,12,17];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)
  // console.log('left:', left);
  // console.log('right:', right);
  const leftside = mergeSort(left);
  const rightside = mergeSort(right);
  return merge(leftside, rightside);
}

function merge(arr1, arr2){
  const result = [];
  let indexI = 0;
  let indexJ = 0;
  while(indexI < arr1.length && indexJ < arr2.length)
  {
    if(arr1[indexI] < arr2[indexJ]){
      result.push(arr1[indexI]); indexI++; 

    } else {
      result.push(arr2[indexJ]); indexJ++;
    } 
    
  }
  //remaining elements from indexes 
  for(let i=indexI; i<arr1.length; i++){
      result.push(arr1[i]);
    }
    for(let i=indexJ; i<arr2.length; i++){
      result.push(arr2[i]);
    }
  return result;
}


const answer = mergeSort(numbers);
console.log(answer);

// merge(num1, num2)