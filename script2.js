function removearr(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1);
          j--;
        }
      }
    }
    return arr;
  }
  
  const myArray = [1, 2, 2, 3, 4, 1, 5];
  const newarr = removearr(myArray);
  console.log(newarr); 
  