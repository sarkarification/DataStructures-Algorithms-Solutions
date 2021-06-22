const countDuplicatesinArray = (data) => {
  let obj = {};
  let duplicate = {};
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (obj[data[i]] !== undefined) {
      duplicate[data[i]] = i;
    }
    else {
      obj[data[i]] = i;
    }

  }
  console.log(duplicate);
  console.log(obj);
  return Object.keys(duplicate).length;
}

countDuplicatesinArray([1, 3, 1, 4, 5, 6, 3, 2])