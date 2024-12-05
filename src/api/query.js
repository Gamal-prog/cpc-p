import axios from 'axios'
import defaultList from './defaultList' // if above than api requests limit access 

export const getPhotos = async (count = 20) => {
    const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
    const URL = `https://api.unsplash.com/photos/random`;
  
    try {
      const response = await axios.get(URL, {
        params: {
          count, 
          client_id: API_KEY,
        },
      });
      return response.data; 

    } catch (error) {
      console.error("Error fetching random photos:", error);
      let result = [];

      for (let i = 1; i <= 21; i++) 
        array.push(defaultList); 

      return result;
      //return defaultList;
    }
};

export const getPhotosBySearch = async (query) => {
  const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
  const URL = `https://api.unsplash.com/search/photos`;

  try {
    const response = await axios.get(URL, {
      params: { query, client_id: API_KEY },
    });
    console.log(response.data.results); 
    return response.data.results;
  } catch (error) {
    console.error("Error searching photos with Axios:", error);
  }
};
