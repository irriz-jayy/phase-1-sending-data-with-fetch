// //Setting base url
// const baseUrl = "http://localhost:3000/users";

// //Creating form data
// const data = { name, email };
// //fetch
// fetch(baseUrl, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     //Appending
//     document.body.innerHTML = data.id;
//   })
//   //Errors
//   .catch((error) => {
//     //Appending error message
//     document.body.innerHTML = error.message;
//   });

fetch;
function submitData(name, email) {
  const data = { name, email };
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      document.body.innerHTML = data.id;
    })
    .catch((error) => {
      document.body.innerHTML = error.message;
    });
}
