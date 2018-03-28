export default function quicksort(inputArray){
  return qsRecursive(inputArray, 0, inputArray.length -1);
}

function qsRecursive(inputArray, left, right){
  if(left >= right){
    return;
  }
  const pivotValue = inputArray[Math.floor((left + right)/2)];
  const index = partition(inputArray, pivotValue, left, right);
  console.log('index: ', index);
  qsRecursive(inputArray, left, index - 1);
  qsRecursive(inputArray, index, right);
}

function partition(inputArray, pivotValue, left, right){
  let lIndex = left;
  let rIndex = right;
  let p = 0;
  console.log(inputArray, [lIndex, rIndex, pivotValue]);
  while(lIndex < rIndex && p < 20){
    const lValue = inputArray[lIndex];
    const rValue = inputArray[rIndex];
    if(lValue >= pivotValue && rValue <= pivotValue){
      inputArray[lIndex] = rValue;
      inputArray[rIndex] = lValue;
      lIndex++;
      rIndex--;
    } else {
      lIndex = lValue <= pivotValue ? lIndex + 1 : lIndex;
      rIndex = rValue >= pivotValue ? rIndex - 1 : rIndex;
    }
    p++;
  }
  return lIndex;
}
