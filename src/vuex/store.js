import Vue from 'vue'
import Vuex from 'vuex'
import ecgView from './modules/ecgView';
import ecgPart from './modules/ecgPart';
import ecgDrag from './modules/ecgDrag';
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ecgView,
        ecgPart,
        ecgDrag
    },
    state: {},
    mutations: {},
    actions: {}
})
