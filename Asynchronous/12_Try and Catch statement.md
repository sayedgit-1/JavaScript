# Try and Catch statement

Please do not confuse the try and catch statement with
the ‘.catch’ method we use in promises, although their purpose is to catch the errors.

Try and catch statement come in pairs:

```
try {
    //Block of code to try
}
catch(err) {
    //Block of code to handle errors
}
```

```
function isValid(text) {
try {
JSON.parse(text);
return true;
} catch {
return false;
}
}
```

### example when error happen outside the Promise:

```
function getUserByUserId1(id) {
    if(typeof id !=='number' || id <= 0){
        throw new Error('This is not valid user id!');
    }
    return new Promise((resolve, reject) => {
        resolve({
            id: id,
            username: 'admin',
            role: 'administrator'
        });
    });
}
try{
    getUserByUserId1('AndyPeterson')
    .then(user => console.log(user.username))
    .catch(err => console.log(`Caught by .catch ${err}`));
}
catch(e){
    console.log(`Caught by try/catch statement: ${e}`);
}
```
