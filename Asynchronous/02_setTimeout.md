# setTimeout

- syntax :

  ```
      setTimeout(code[, delay]);
  ```

- the first argument is a function, and the second argument is the delay timer measured in milliseconds

Example :

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>setTimeout Function in JavaScript</title>
</head>
<body>
<h1>setTimeout function in JavaScript</h1>
<h2 id="output">Output goes here:</h2>


<script>
    function displayResult1(){
        document.getElementById("output").innerHTML = "Loading....."
    }
    function displayResult2 (){
        document.getElementById("output").innerHTML ="you will see this message in 10 seconds";
    }

    setTimeout(displayResult1,1000)
    setTimeout(displayResult2,5000)
</script>
```
