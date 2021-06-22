const arr = [123, 321, 22431, 678, 1, 23, 11123, 99, 567];

function checkingarr(array){
    obj= {};
    array.sort(function(a, b){return a - b});
    for(let i=0; i<array.length; i++){
      if((array[i]+'').indexOf('1') > -1 && (array[i]+'').indexOf('2') > -1 && (array[i]+'').indexOf('3') > -1){
        obj[array[i]] = i;
      }
    }

    return Object.keys(obj);
}

checkingarr(arr);

// Given an array of numbers, return the numbers that contain 1, 2 and 3.
// If multiple numbers satisfy, then return them in increasing order, separated by , 

// Example, 123, 321, 22431, 678, 1, 23, 11123, 99, 567

// Output 123,321,11123,22431