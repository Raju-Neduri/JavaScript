fetch("https://reqres.in/api/users?page=2")
  .then(function (res) {
    return res.json(); // Convert response to JSON
  })
  .then(function (data) {
    console.log(data); // Now you're logging the actual data!
  })
  .catch(function (error) {
    console.log("Error:", error);
  });
