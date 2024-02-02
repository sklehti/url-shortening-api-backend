import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const PORT = 3001;

/* app.get('/dog',(req,res)=>{
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    ...
    }) */

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

// eslint-disable-next-line
app.get("/test", async (_req, res) => {
  //console.log(req, " ja ");

  const response = await axios.post(
    "https://cleanuri.com/api/v1/shorten",
    `url=https://cleanuri.com/api/v1/shorten`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log(response);

  res.send(response.data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
