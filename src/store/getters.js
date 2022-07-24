const getters = {

    getUserEmail(state) {
        if ( state.user != null ) {
            return state.user.user.email
        }
        return null
    }

}

export default getters