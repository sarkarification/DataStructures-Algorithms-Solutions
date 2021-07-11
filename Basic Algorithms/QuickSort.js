const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array){

  if(array.length === 1){
    return array;
  }

  const pivot = array[array.length -1]
  const leftside = [];
  const rightside = [];

  for(let i=0; i<array.length-1; i++) // browse array except pivot
  {
    if(array[i]<pivot){
      leftside.push(array[i]);
    } else{
      rightside.push(array[i]);
    }
  }

  if(leftside.length > 0 && rightside.length > 0){
    return [...quickSort(leftside), pivot, ...quickSort(rightside)]
  }else if(leftside.length > 0){
    return [...quickSort(leftside), pivot]
  } else {
    return [pivot, ...quickSort(rightside)]
  }
}


const sortednums = quickSort(numbers);
console.log(sortednums);