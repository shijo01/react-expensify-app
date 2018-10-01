const promise = new Promise(((resolve, reject) => {
    setTimeout(() => {
        if (new Date().getMilliseconds() % 2 === 0) {
            resolve({data: 'resolved'});
        } else {
            reject({error: 'rejected'});
        }
    }, 3000);
}));

promise
    .then((data) => {
        console.log(data);
        return "This is the return value from first 'then'"
    })
    .then((value) => {
            console.log(value);
        }
    )
    .catch((error) => {
        console.log(error);
    });

//Promise chaining
// return from previous then will receive as arg in next then