function myResponse() {
    return "Hello!";
}

async function asyncCall() {
    const result = await myResponse();

    console.log(result);
};

asyncCall();