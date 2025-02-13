import axios from 'axios';
const apiBase = 'https://63d9187974f386d4efe47837.mockapi.io/movies';

const movieService = {
  // getAll() {
  //   return fetch(apiBase)
  //     .then((res) => res.json())
  //     .then((data) => data);
  // },
  getAll(name = '') {
    return axios.get(apiBase + `?name=${name}`).then((res) => res.data);
  },
  getFavorite() {
    return axios.get(apiBase + '?isFavorite=true').then((res) => res.data);
  },

  getById(id) {
    return axios.get(apiBase + `/${id}`).then((res) => res.data);
  },

  deleteById(id) {
    return axios.delete(apiBase + `/${id}`).then((res) => res.data);
  },

  editById(id, data) {
    // console.log(id, data);
    return axios.put(apiBase + `/${id}`, data).then((res) => res.data);
  },

  create(data) {
    return axios
      .post(apiBase, data)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  },

  // funcion que recibe por parámetro el id y el objeto, y lo que hace es
  // remplazar a traves de un put, el valor de isFavorite dentro del objeto en concreto  de la api
  toggleFavorite(id, data) {
    return axios.put(apiBase + `/${id}`, data);
  },
};
export default movieService;
