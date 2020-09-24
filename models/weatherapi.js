import axios from 'axios';

async function getResults(query) {
    const result = await axios(`http://api.weatherapi.com/v1`)
    console.log(result);
}

getResults();