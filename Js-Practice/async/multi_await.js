function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("I will excute first");
        }, 1000)
    })
}
function task2() {
    return new Promise((solve) => {
        setTimeout(() => {
            solve("I will excute second");
        }, 4000)
    })
}
async function tasks() {
    let first = await task1();
    console.log(first);
    let second = await task2();
    console.log(second);
    console.log("end");

}
tasks();
