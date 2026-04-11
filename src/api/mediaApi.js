import axios from 'axios';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY


// normalizing fetched data from api

const UNSPLASH_BASE_URL = 'https://api.unsplash.com/search/photos';

export async function fetchPhotos(query, page, per_page = 20) {
    // console.log('UNSPLASH KEY:', import.meta.env.VITE_UNSPLASH_KEY);

    const res = await axios.get(UNSPLASH_BASE_URL, {
        params: { query, page, per_page },
        headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
    })

    // console.log(res);
    // console.log(res.data);
    return res.data
}


// videos api fetch
const PEXELS_BASE_URL = 'https://api.pexels.com/videos/search'

export async function fetchVideos(query, page = 1, per_page = 15) {
    const res = await axios.get(PEXELS_BASE_URL, {
        params: { query, page, per_page },
        headers: { Authorization: PEXELS_KEY }
    })

    console.log(res.data);
    return res.data;
}