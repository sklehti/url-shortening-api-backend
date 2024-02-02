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

// eslint-disable-next-line
app.post("/links", async (req, res) => {
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  const response = await axios.post(
    "https://cleanuri.com/api/v1/shorten",
    `url=${req.body.longUrl}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  res.send(response.data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
