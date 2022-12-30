# Promise Chaining

With the promises, we can fix those things and chain multiple promises together.

`Syntax :`

```
let myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('a'), 1000);
 }).then(function(result) { //
    //console.log(result); // a
    return result + 'b';
 }).then(function(result) {
    //console.log(result); // ab
    return result + 'c';
 }).then(function(result) {
    //console.log(result); // abc
    return result +'d';
 });
myPromise.then((result) => console.log(result));
```

- `This example shows that the result from the initial promise is passed down through the chain of ‘.then’ handlers. If
you run this in your console, you will see the output like this: ‘abcd’.`

- `From this example, we have learned that we do not need to save each promise in a separate variable. Instead, we
can use a chain of promises.`

Here is the same example where we need to save each promise in a separate variable
‘this is how we are not supposed to do, although it is not wrong and is usually preferred by the newbie coders’:

```
let myPromise1 = new Promise(function(resolve, reject) {
setTimeout(() => resolve('a'), 1000);
});
let myPromise2 = myPromise1.then(function(result) {
//console.log(result); // a
return result + 'b';
});
let myPromise3 = myPromise2.then(function(result) {
//console.log(result); // ab
return result + 'c';
});
let myPromise4 = myPromise3.then(function(result) {
//console.log(result); // abc
return result +'d';
});
myPromise4.then((result) => console.log(result));
//Output: abcd

```
