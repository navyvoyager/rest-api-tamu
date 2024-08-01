const express = require("express");
const app = express();
const port = 3000;

// Route untuk endpoint root
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
