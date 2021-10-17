// Q1 create function

function sum(a, b, callback) {
  return a + b;
}

setTimeout(() => {
  let result = sum(2, 3, (ans) => {
    return ans;
  });
  console.log(result);
}, 1000);

// Q2 create a new promise object
const isAvailable = true;
const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (isAvailable) {
      resolve("sucess");
    } else {
      reject("failed");
    }
  }, 1000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

// Q3 using async/await

async function ques() {
  return Promise.resolve("Question2");
}

ques()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
