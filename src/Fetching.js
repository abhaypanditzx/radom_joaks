const axios = require('axios');

const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';

async function fetchData() {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = fetchData;
