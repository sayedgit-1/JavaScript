# Error – Rejection Handling

To handle errors we usually need to use the
.catch method to handle errors.

Here is one example:

```
getUserByUserId('abc')
.then(user => console.log(user.username))
.catch(err => console.log(err));
```

Let us have a look at the following example:

```
let isAuthorized = false;
function getUserByUserId(id) {
    return new Promise((resolve, reject) => {
        if (!isAuthorized) {
            throw new Error('Unauthorized access!');
        }
        resolve({
            id: id,
            username: 'admin',
            role: 'administrator'
        });
    });
}
getUserByUserId(1234756525)
.then(user => console.log(user.username))
.catch(err => console.log(`Caught by .catch ${err}`));

```

Inside our promise, we are throwing an error, which will generate an error object with some message. Obviously,
here in this example, no matter what kind of value we pass into the getUserByUserId function, it will always throw
a new error because we set the isAuthorized variable to be false but this is just to demonstrate how things are done.
This will not happen in everyday scenarios, but it is a good example of using the throw statement to throw an
exception and then handle it using the ‘.catch’ method. So the throw statement will let us create our custom errors,
which we want in our case.
