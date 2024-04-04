document.getElementById("loginButton").addEventListener("click", function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // make a fetch call here
  // handle response success/error accordingly
  // TIP: you can call ->  alert('msg') <-  to open a pop up to show success/failure
});

document.getElementById("registerButton")
  .addEventListener("click", function () {
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    // make a fetch call here
    // handle response success/error accordingly
    // TIP: you can call ->  alert('msg') <-  to open a pop up to show success/failure
  });
