const mutations = {

    SET_USER(state, payload) {
        state.user = payload;
    },
    SET_USER_ERROR(state, payload) {
        state.userError = payload
    }

}

export default mutations