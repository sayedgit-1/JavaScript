# Add EventListenter (addEventListener)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>addEventListener</title>
</head>
<body>
    <button class="calculate" id="calculate">Calculate</button>
    <script>
        // let calcBtn = document.querySelector(".calculate")
        let calcBtn = document.querySelector("#calculate")

        let doSomeThng =(e) =>{
            console.log(e.target);
        }
        calcBtn.addEventListener("click",doSomeThng);
    </script>
</body>
</html>

```

Every time the user clicks, the new
event will be added, and inside this event, we have the doSomething() function, a callback function.
The callback function doSomething is very simple. It will only console log the element that triggered that specific
event. The output should be the same HTML5 button tag because ‘e.target’ will get us the target:

```
<button id='calculate' class='calculate'>Calculate</button>
```
