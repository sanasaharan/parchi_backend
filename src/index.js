// backend/src/index.ts
import express from "express";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
