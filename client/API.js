
const API_URL = 'http:localhost:2244/cards';
export default {
  search(searchTerm) {
    console.log(searchTerm + " hellol");
     const url = `${API_URL}&term=${searchTerm}`;
    return fetch(url)
      .then(response => response.json())
      .then(result => result.cards);
  },

};