function binarySearch(array, key) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (array[mid] === key) {
            return mid;
        }
        if (array[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function recursiveSearch(array,target,start=0, end=null){
    if(end==null){
        end = array.length;
    }

    if(start > end){
        return -1;
    }
    const midpoint = Math.floor((start + end)/2);

    if(array[midpoint] == target){
        return midpoint;
    }
    else if(array[midpoint] < target){
       recursiveSearch(array,target,midpoint+1, end) 
    }
    else{
        recursiveSearch(array,target, start, midpoint-1)
    }
}