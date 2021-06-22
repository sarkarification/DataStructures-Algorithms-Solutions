const firstUniqChar = (s) => {
   let map = {};
   for (let i = 0; i < s.length; i++){
     if(map[s.charAt(i)]){
       console.log("found")
        map.push[s.charAt(i)] = Number.MAX_SAFE_INTEGER;
     }else{
       map.push[s.charAt(i)] = i;
     }
    // map[s.charAt(i)] = i;

    // console.log(map[s.charAt(0)])
   }
  // let arr = Object.values(map);
  //  const minval = Math.min(...arr)
  //  if(minval ===  Number.MAX_SAFE_INTEGER) return -1;
  //  else return minval;
  return map;
};

firstUniqChar("lleetcode");