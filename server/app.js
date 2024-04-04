const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Serve static files from the 'public' directory (where your HTML file is located)
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

let users = []; // Storing users

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  console.log(`@register { ${name},${email} ${password}}`);

  const userExists = users.some((user) => user.email === email);

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = { name, email, password };
  users.push(newUser);
  console.log("Registered Users:", users);
  res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(`@login { ${email},${password}}`);

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res
    .status(200)
    .json({
      message: "User logged in successfully",
      user: { name: user.name, email: user.email },
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
