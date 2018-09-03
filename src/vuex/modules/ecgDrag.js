// initial state
// shape: [{ id, quantity }]
const state = {
    curMin: 0
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
    changeCurMin(state, data){
        state.curMin = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
