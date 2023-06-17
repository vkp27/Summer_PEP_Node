/*What is a Promise in JavaScript and how does it work? Explain the states of a Promise. Explain how to chain multiple Promises together and the syntax for doing so.
*/

/*
In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations in a more organized and predictable way.

A Promise can be in one of three states:

1. Pending: The initial state of a Promise. It means that the asynchronous operation is still in progress, and the Promise is neither fulfilled nor rejected.

2. Resolved: The state of a Promise when the asynchronous operation is successfully completed. It means that the Promise has a resolved value.

3. Rejected: The state of a Promise when the asynchronous operation encounters an error or fails. It means that the Promise has a reason for rejection, such as an error message.

A Promise works by providing a set of methods to handle the different states and their corresponding values. The basic syntax for creating a Promise is as follows: 

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  // If successful, call resolve(value)
  // If error or failure, call reject(reason)
});

To handle the result of a Promise, you can use the .then() method to specify a callback that will be executed when the Promise is fulfilled, and the .catch() method to specify a callback that will be executed when the Promise is rejected. For example:

myPromise.then((result) => {
  // Handle fulfillment
}).catch((error) => {
  // Handle rejection
});

Chaining multiple Promises together allows you to perform a sequence of asynchronous operations in a controlled manner. You can use the .then() method to chain additional Promises and handle the resolved values one after another. For example:

myPromise
  .then((result1) => {
    // Handle fulfillment of the first Promise
    return anotherPromise(result1); // Return a new Promise
  })
  .then((result2) => {
    // Handle fulfillment of the second Promise
    return yetAnotherPromise(result2); // Return another Promise
  })
  .then((result3) => {
    // Handle fulfillment of the third Promise
    // ...
  })
  .catch((error) => {
    // Handle any errors throughout the chain
  });


 */