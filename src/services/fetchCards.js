import axios from 'axios';

const fetchCards = async (search, page) => {
  const url = 'https://pixabay.com/api/';
  const key = '29730339-d122beaa10b573098fe13e924';
  const filter = `?key=${key}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${url}${filter}`).then(response => response.data);
};

export default fetchCards;
