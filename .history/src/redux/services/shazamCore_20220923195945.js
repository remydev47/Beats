
const options = {
    method: 'GET',
    headers:{
        'X-RapidAPI-Key': process.env.SHAZAMCORE_RAPID_API_KEY,
        'X-RapidAPI-Host': ''
    }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
 .then(response => response.json())
 .then(response => console.log(response))
 .catch(err => console.error(err));
 