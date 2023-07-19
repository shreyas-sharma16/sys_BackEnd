const express = require("express");
const cors = require("cors");
const app = express();
const userVerification = require('./routes/verification');

app.use(cors());
app.use(express.json());

app.use('/verification', userVerification )

// app.get("/", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});