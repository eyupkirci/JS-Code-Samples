/** promise */

const myPromise = new Promise((resolve, reject) => {
    console.log("myPromise started");
    let condition = true;
    if (condition) {
      resolve("işlem tamam");
    }
    reject(Error("gerçekleşmedi"));
  });
  
  console.log("merhaba");

  myPromise
    .then((msg) => {
      console.log(msg);
    })
    .catch((msg) => {
      console.log(msg);
    });

  console.log("gule gule");