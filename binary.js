function findIt(arr,num){
  mid = Math.floor(arr.length/2-1);
  let j=2;
  while (num !== arr[mid]){
    if (num > arr[mid]){
      mid += 1+Math.floor(arr.length/Math.pow(2,j));
      ++j;
    }
    else {
      mid -= 1-Math.floor(arr.length/Math.pow(2,j));
      ++j;
    }
  }

  return mid;
}
