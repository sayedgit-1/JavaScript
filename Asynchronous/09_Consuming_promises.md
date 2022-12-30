# Consuming Promises

Now, we know how to construct promises, but we also need to figure out how to get its result. Once the promise has
settled, meaning it returned a result or an error, it is time to use some methods. Consuming functions/methods are

- .then
- .catch
- .finally

The fundamental one is the ‘.then’ method and here is the syntax:

```
promise.then(function(result) {
/* handle a successful result */
},function(error) {
/* handle an error */
} );
```

- .then method will specify an action that should be done after the promise is resolved.
- The
  first argument is a function passed, as you can see from the syntax. This function will run when the promise is
  resolved and when it receives the result.
- The second argument is a function that will run when the promise is
  rejected.

## Resolve

```
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Resolved!"), 3000);
});
promise.then(
    result => console.log(result), //"Resolved!" after 3 seconds
    error => console.log(error) // it will not run
);
```

## Reject

```
let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Error happened!")), 3000);
});

promise1.then(
    result => console.log(result), // it will not run
    error => console.log(error) // "Error: Whoops!" after 1 second
);
```
