document.getElementById("loginButton").addEventListener("click", function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // make a fetch call here
  // endpoint to call: http://localhost:3000/login
  // handle response success/error accordingly
  // TIP: you can call ->  alert('msg') <-  to open a pop up to show success/failure

  const url  = "http://localhost:3000/login";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email, 
      password: password
    })
  })
  .then((resp)=> resp.json())
  .then((data)=>{
    console.log('in client:', data);
    alert(data.message);
  })

});

document
  .getElementById("registerButton")
  .addEventListener("click", function () {
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    console.log(`name: ${name} email: ${email}, password: ${password} , `);
    const url = "http://localhost:3000/register";
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
    .then(response => response.json())
    .then((data)=>{
      console.log('this data: ', data);
      alert(data.message)
    })

  });
