import axios from "axios";

export default axios.create({
  baseURL: "https://api.twitch.tv/kraken",
  headers: {
    "Accept": "application/vnd.twitchtv.v5+json",
    "Client-ID": "fsgt19mlo7ihyulyudzohik4q6b2ef",
  },
});