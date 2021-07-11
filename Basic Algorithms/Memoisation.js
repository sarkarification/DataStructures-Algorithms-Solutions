let cache = {}
function memoized80 (n) {
  if(cache[n]) {
    return cache[n]
  }
  console.log("much work")
  cache[n] = n+80;
  return cache[n];
}


function memoized80Dynamic () {
  let cache = {}

  return function(n) {
    if(cache[n]) {
    return cache[n]
  }
  console.log("much work")
  cache[n] = n+80;
  return cache[n];
  }
  
}

console.log('1',memoized80(7))
console.log('2',memoized80(7))
console.log('3',memoized80(6))
console.log('4',memoized80(7))
console.log('-------------------------')
const memo = memoized80Dynamic()

console.log('1',memo(5))
console.log('2',memo(5))
console.log('3',memo(6))