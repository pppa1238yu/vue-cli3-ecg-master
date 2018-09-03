// initial state
// shape: [{ id, quantity }]
const state = {
    selectAdd: '10'
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
    changeAddSelected(state, data){
        state.selectAdd = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
