# callBack function

A callback is a function that is passed as an argument to another function.

Example :

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sequence control in JavaScript</title>
  </head>
  <body>
    <h1>Sequence control in JavaScript</h1>
    <h2 id="output">Output goes here:</h2>
    <form name="myForm" action="#">
      <label name="firstOperand">First Operand</label>
      <input type="text" name="firstOperand" id="first" /><br /><br />
      <label name="secondOperand">Second Operand</label>
      <input type="text" name="secondOperand" id="second" /><br /><br />
      <button id="calculate">Calculate</button>
    </form>
    <!-- <script>
            let calcBtn = document.querySelector('#calculate');
            calcBtn.addEventListener('click',(e)=>{
              e.preventDefault();//to prevent the form to submit
              let a = parseInt(document.querySelector('#first').value);
              let b = parseInt(document.querySelector('#second').value);
              function printThis(theSum){
                document.getElementById("output").innerHTML = theSum;
              }
              function calculateTwo(a, b) {
                let sum = a + b;
                return sum;
              }
              let result = calculateTwo(a, b);
              printThis(result);
            });
        </script> -->

        // or

    <script>
      let calcBtn = document.getElementById("calculate");
      calcBtn.addEventListener("click", (e) => {
        e.preventDefault();
      });
      let a = parseInt(document.getElementById("first").value);
      let b = parseInt(document.getElementById("second").value);
      function printThis(theSum) {
        document.getElementById("output").innerHTML = theSum;
      }
      function calculateTwo(a, b, theCallBack) {
        let result = a + b;
        theCallBack(result);
      }
      calculateTwo(a, b, printThis);
    </script>
  </body>
</html>

```
