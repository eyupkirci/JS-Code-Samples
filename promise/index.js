/** promise */

const myPromise = new Promise((resolve, reject) => {
    console.log("myPromise started");
    let condition = true;
    if (condition) {
      resolve("prcess resolved");
    }
    reject(Error("not finished"));
  });
  
  console.log("hi");

  myPromise
    .then((msg) => {
      console.log(msg);
    })
    .catch((msg) => {
      console.log(msg);
    });

  console.log("bye");