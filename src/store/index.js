import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imgLoad: ''
  },
  mutations: {
    updateImgLoad(state, tit) {
      state.imgLoad = tit;
    }
  },
  actions: {
    
  },
  getters: {
    
  },
  modules: {
    
  }
});