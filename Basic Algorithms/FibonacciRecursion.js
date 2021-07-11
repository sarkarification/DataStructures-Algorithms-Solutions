// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
  let arr = [0,1];
  for(i=2; i<=n ; i++){
    arr.push(arr[i-1] + arr[i-2])
  }
  return arr[n];
  
}
fibonacciIterative(6);

function fibonacciRecursive(n) {
  if (n<2){
    return n;
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}

// fibonacciRecursive(105)

function fibonacciRecursiveDynamic() {
  let cache = {}
  return function fib(n) {
    if(cache[n]){
      console.log("cached value is picked")
      return cache[n];
    }
    if (n<2){
    return n;
    }
    cache[n] = fib(n-1) + fib(n-2)
  return cache[n];
  }
  
}

const fibo = fibonacciRecursiveDynamic()
fibo(1523)

function fibonacciRecursiveDynamic2(n) {
  let array = [0,1]
  for( let i = 2 ; i<=n; i++)
  array.push(array[i-1] + array[i-2])
  
  return array.pop()
}

console.log(fibonacciRecursiveDynamic2(5))