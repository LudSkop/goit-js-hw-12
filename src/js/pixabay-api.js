

import axios from "axios";


const API_KEY = "54654326-693c693fec20ccb1a66ef61d3";

export async function getImagesByQuery(query, page) {
    const URL = "https://pixabay.com/api/";
  
   try {
     const response = await axios.get(URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page: page,
            per_page: 15,
        }
    });
        console.log("photo:", response.data);
        return response.data;
       
     
   } catch(error) {
    console.log(error)
   }
}
