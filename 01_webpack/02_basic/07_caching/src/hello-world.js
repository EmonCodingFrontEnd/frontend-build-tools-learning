function getString() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello world!!!");
        }, 2000);
    });
}

async function helloWorld() {
    // console.log("Hello World!");
    let string = await getString();
    console.log(string);
}

export default helloWorld;
