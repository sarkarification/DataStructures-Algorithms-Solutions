
function solution(A) {
    let obj={};

    for(let i = 0; i < A.length; i++){
        obj[A[i]] = i
    }

    for(let i = 1; i < 100000; i++){
        if(obj[i] === undefined) {console.log(i); break; }
    }


    return obj
}
solution([1,2,3])
solution([1, 3, 6, 4, 1, 2])