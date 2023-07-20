const thePromise = new Promise((resolve, reject) => {
  let serverRequest = true;

  if (serverRequest) {
    resolve("Successfull next step");
  } else {
    reject("Request failed");
  }
});
thePromise.then((result) => {
  console.log(result);
});
