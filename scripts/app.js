// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


// right away I see two ways we can do this 
// we could use the .reverse() method to reverse the array
// or we could iterate down instead of up in our for loop
// we are going to use a for loop to iterate through the array
// we will need to intialize the array, let arr = []
// with arr.push(i) we will push each element into the array
// we then return the array with .reverse() to reverse the array
function reverseSeq(n){
    let arr = [];
    for(i = 1; i <= n; i++){
        arr.push(i);
    }
    return arr.reverse();
}

// we will need to intialize the array, let arr = []
// in the for loop we will loop down form n to 1
// with arr.push(i) we will push each element into the array
// we then return the array that has already been reversed
function reverseSeq(n){
    let arr = [];
    for(let i = n; i > 0; i--){
        arr.push(i)
    }
    return arr;
}