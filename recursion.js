function sigma(num) {
    if(num <= 1) {
        return 1;
    }
    console.log(num + sigma(num-1));
    return num + sigma(num-1);
}

var result = sigma(4);
console.log(result);

function sumArrayValues(arr, i=0) {
    // base case: when we get to end of array
    if(i >= arr.length) {
        return 0;
    }
    return arr[i] + sumArrayValues(arr, i+1);
}
var result = sumArrayValues([2,4,6,8]);
console.log(result);

