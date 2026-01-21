// Synchronous
// let x = 1;

// x = x + 1;

// console.log("Value of x = ", x);


let myPromise = new Promise(function(resolve, reject){
    result = false;

    if(result === true) {
        setTimeout(() => {
            resolve("Okay");
        }, 3000);
    } else {
        reject("error occured");
    }
});

myPromise.then((x) => myDisplay(x)).catch(err =>{
    console.error(err);
});

function myDisplay(some) {
    console.log(some);
};


console.log("hahahaha")