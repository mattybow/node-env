export default function inArray(list, val){
  list.sort((a,b) => a - b);
  console.log(list, val);
  let start = 0;
  let end = list.length - 1;
  while (start < end) {

    const mid = Math.ceil((start + end) / 2);
    console.log(`${start}|${mid}|${end}`);
    const midVal = list[mid];
    if(midVal === val){
      return true;
    }
    if(val < midVal){
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}
