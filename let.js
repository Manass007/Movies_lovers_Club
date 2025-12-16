let x = 1007;
console.log("Value of X: ", x);

{
    // new Block
    let x = 2007;
    console.log("Value of X inside block: ", x);
}
console.log("Value of X again: ", x);

x = x + 1;

console.log("Value of x = x + 1: ", x);
