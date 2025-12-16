try {
    const x = 1;
    x = x + 1;
    console.log(x);
} catch (error) {
    console.log("Error Occured");
} finally {
    console.log("Inside Finally");
};