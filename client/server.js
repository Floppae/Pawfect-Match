import axios from "axios";
import express from "express";
import cors from "cors";
import "dotenv/config";

// console.log(process.cwd());
// console.log("CLIENTID", process.env.CLIENT_ID);
// console.log("CLIENTSECRET", process.env.CLIENT_SECRET);

const app = express();
app.use(cors());

// Get Authorization Token For Current User
async function getToken() {
  const tokenRequest = await axios.post(
    "https://api.petfinder.com/v2/oauth2/token",
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
    })
  );
  return tokenRequest.data.access_token;
}

// Get all relevant animal info based on user input
// Required User parameters: Zip Code, Dog or Cat
// Optional User Parameters:
app.get("/api/animals", async (req, res) => {
  try {
    // Use getToken() to grab current session token
    const token = await getToken();
    console.log("Token", token);
    const response = await axios.get("https://api.petfinder.com/v2/animals", {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        type: req.query.type,
        location: req.query.zipCode,
        age: req.query.age,
        distance: req.query.distance || 10,
        gender: req.query.gender,
        breed: req.query.breed,
      },
    });
    res.json(response.data.animals);
  } catch (error) {
    console.error("Error fetching animals:");
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
