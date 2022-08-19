import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    store: []
  },
  getters: {
  },
  mutations: {
     GETstore(state, data) {
      state.store =  data;
    }
  },
  actions: {
   async GETStore(context) {
    const res = await axios.get('http://localhost:3000/api/store');
    context.commit('GETstore',  res.data);
   },
   async newItem(context, newItem) {
      await axios.post('http://localhost:3000/api/store', newItem);
   },
   async editItem(context, itemId) {
     await axios.put(`http://localhost:3000/api/store/${itemId.id}`, itemId);
   }
  },
  modules: {
  }
}) 
