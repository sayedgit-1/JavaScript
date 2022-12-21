// C R E A T E  XMLHttpRequest

//Here is the link to this website (you can read more about jsonplaceholder on their site):
// https://jsonplaceholder.typicode.com/

// NB : before console on browser run the url for data eg:https://jsonplaceholder.typicode.com/users

//------------------------------------------------------------------------------------------------------------------//

//------------------- General method foe creating  XMLHttpRequest -------------------------------------------------//
// const request = new XMLHttpRequest();
// request.open("GET", " https://jsonplaceholder.typicode.com/users/", true);
// request.send();
// console.log(request);

// or

// const request = new XMLHttpRequest(),
//   method = "GET",
//   url = "https://jsonplaceholder.typicode.com/users/";
// request.open(method, url, true);
// request.send();
// console.log(request);

//-----------------------------------------------------------------------------------------------------------------------//

//------------------------fetching data using XMLHttpRequest.onreadystatechange property --------------------------------//

const request = new XMLHttpRequest(),
  method = "GET",
  url = "https://jsonplaceholder.typicode.com/users";
request.open(method, url, true);
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log("Oh no! There has been an error and could not fetch the data!");
  }
};
request.send();

//----------------------------------------------------------------------------------------------------------------------//

//----------------------- For ReUseable purpose we can put the entire code inside a function --------------------------//
const getUsers = () => {
  const request = new XMLHttpRequest(),
    method = "GET",
    url = "https://jsonplaceholder.typicode.com/users/";
  request.open(method, url, true);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    } else if (request.readyState === 4) {
      console.log(
        "Oh no! There has been an error and could not fetch the data"
      );
    }
  };
  request.send();
};
getUsers();
