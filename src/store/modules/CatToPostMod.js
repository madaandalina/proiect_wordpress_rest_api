import axios from "axios";

const state = {
  catposArray: [],
};
const getters = {
  catposFunc: (state) => state.catposArray
};
const actions = {
  async catposApi({ commit }) {
    let data = [];
    let regEx = /\/cattoposts\/\d+/g;
    let url = window.location.href.match(regEx);
    let part = url[0].split("/");
    let num = part[part.length - 1];
    
    let result = (await axios.get(
      `https://www.wired.com/wp-json/wp/v2/posts/?categories=${num}`
    )).data;
    data = data.concat(result);
    commit("catposFunc", data);

  },
};
const mutations = {
    catposFunc: (state, catposArray) =>
    (state.catposArray = catposArray),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
