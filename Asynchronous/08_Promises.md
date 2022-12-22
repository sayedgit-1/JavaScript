# Promise

## A Promise is an object that represents the result of an asynchronous operation

- function returns a promise that will be either resolved or rejected.

```
let promise = new Promise(function (resolve, reject) {
// Here is the body of executor function
});
```

- the new keyword and call of the Promise constructor

### Example of resolev and reject :

```
function getImage(url) {
    return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener('load', e => resolve(img));
    img.addEventListener('error', () => {
        reject(new Error(`Failed to load image's URL: ${url}`));
    });
    img.src = url;
    });
}

```

## Immediately Settled Promises

```
//immediately settled promises
const loadImage = url => {
    if (url === undefined) return Promise.resolve('value');
}
loadImage();
```

```
//imediately rejected promises
const loadImage1 = url => {
    if (url === undefined) {
        return Promise.rejected(Error('There is no URL provided'));
    }
}
loadImage1();

```
