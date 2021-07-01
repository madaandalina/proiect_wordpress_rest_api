import axios from "axios";

const state = {
  categoriesArray: [],
};
const getters = {
  categories: (state) => state.categoriesArray
};
const actions = {
  async loadingApi({ commit }) {
    let data = [];
    let result = (await axios.get(
      "https://www.wired.com/wp-json/wp/v2/categories/"
    )).data;
    data = data.concat(result);
    commit("categories", data);
  },
};
const mutations = {
  categories: (state, categoriesArray) =>
    (state.categoriesArray = categoriesArray),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
