import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
 
  params: {
    id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};


// export const fetchDataFromAPI = async(url) => {
//     try {
//         const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//         console.log(data)
//     return data;
//     } catch (error) {
//         console.error('Error fetching data:', error.response ? error.response.data : error.message);
//     }
// };

export const fetchDataFromAPI = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
        return null; // Return null if there's an error to handle it gracefully
    }
};
