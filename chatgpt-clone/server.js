const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors()); 

const API_KEY = "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";

app.listen(PORT, () => console.log("your server is running on port " + PORT));

app.post("/completions", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "How are u?" }],
      max_tokens: 100,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
