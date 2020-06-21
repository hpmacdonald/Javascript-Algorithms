function combineArray(arr1, arr2) {
    let newArr = [];
    let i = 0;
    let j= 0;
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            newArr.push(arr2[j]);
            j++;
        } else {
            newArr.push(arr1[i]);
            i++;
        }
    }while(i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }
    console.log(newArr);
}
combineArray([1,3,5,7,9], [2,4,6,8,10]);