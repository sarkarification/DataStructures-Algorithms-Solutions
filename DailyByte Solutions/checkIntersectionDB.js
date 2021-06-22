const checkIntersectiion = (arr1, arr2) => {
  obj = {};
  arr ={};
  for(let i=0; i<arr1.length; i++){
    obj[arr1[i]] = i;
  }
  for(let i=0; i<arr2.length; i++){
    if(obj[arr2[i]] !== undefined) arr[arr2[i]] = arr2[i];
  }
  return Object.values(arr);
  
}

const array1 = [4,9,5];
const array2 = [9,4,9,8,4];

checkIntersectiion(array1, array2)
// This question is asked by Google. Given two integer arrays, return their intersection.
// Note: the intersection is the set of elements that are common to both arrays.

// Ex: Given the following arrays...

// nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
// nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
// nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []