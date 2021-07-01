import axios from "axios";

const state = {
  postsArray: [],
 
  
};
const getters = {
  postsFunc: (state) => state.postsArray
};
const actions = {
  async postsApi({ commit }, pageNr=1) {
    let data = [];
    let result = (await axios.get(
      `https://www.wired.com/wp-json/wp/v2/posts/?per_page=10&page=${pageNr}`
    )).data;
    data = data.concat(result);
    commit("postsFunc", data);
  },
};
const mutations = {
  postsFunc: (state, postsArray) =>
    (state.postsArray = postsArray),
};

export default {
  state,
  mutations,
  actions,
  getters,
};