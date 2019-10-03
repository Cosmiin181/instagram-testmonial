
var vector = [123,12,3,123,123,12,312,3,123];

function calculateNumbers(array){
    var sum = 0;
    for(index=0;index<array.length;index++){
        sum += array[index];
    }
    return sum;
}

console.log('sum of numbers',calculateNumbers(vector));