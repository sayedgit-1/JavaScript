# clearTimeout()

`clearTimeout()` function to cancel the setTimeout. And it takes an argument timer Id and this id we get from the setTimeout function.

```
let timerId = setTimeout(() => console.log("It will never be printed"), 2000);
console.log(timerId);
clearTimeout(timerId);

```
