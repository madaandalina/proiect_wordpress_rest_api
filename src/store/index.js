import vuex from "vuex";
import catMod from "./modules/catMod.js";
import CatToPostMod from "./modules/CatToPostMod.js";
import PostsMod from "./modules/PostsMod.js";

export default new vuex.Store({
  modules: {
    catMod,
    CatToPostMod,
    PostsMod
  },
});
