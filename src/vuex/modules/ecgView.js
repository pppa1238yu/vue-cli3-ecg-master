// initial state
// shape: [{ id, quantity }]
const state = {
    gainSelected: 10,
    rhythmTypeSelected:''
};

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
    changeGainSelected(state, data) {
        state.gainSelected = data;
    },
    changeRhythmTypeSelected(state,data){
        state.rhythmTypeSelected=data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
