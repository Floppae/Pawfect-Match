import axios from "axios";
import "dotenv/config";

// console.log(process.cwd());
// console.log("CLIENTID", process.env.CLIENT_ID);
// console.log("CLIENTSECRET", process.env.CLIENT_SECRET);

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
async function getAnimals(token) {
  const response = await axios.get("https://api.petfinder.com/v2/animals", {
    headers: { Authorization: `Bearer ${token}` },
    params: { type: "dog", location: 10002 },
  });
  return response.data.animals;
}

// Use getToken() to grab current session token
const token = await getToken();
// Use getAnimals() to grab animal details
const allAnimals = await getAnimals(token);

console.log("Token", token);
console.log("Response", allAnimals);
