const getters = {

    getUserEmail(state) {
        if ( state.user != null ) {
            return state.user.user.email
        }
        return null 
    },

    getAlumnosPermitidos(state) {
        let totalAlumnos = state.courses.reduce((total, alumnos) => {
            return total + alumnos.cupos
        }, 0)
        return totalAlumnos
    },
    
    getAlumnosInscritos(state) {
        let totalAlumnosInscritos = state.courses.reduce((total, alumnos) => {
            return total + alumnos.inscritos
        }, 0)
        return totalAlumnosInscritos
    },

    getCursosTerminados(state) {
        let terminados = 0
        state.courses.forEach((curso) => {
            if (curso.terminado == true ) {
                terminados++
            }
        })
        return terminados
    },
    
    getCursosActivos(state) {
        let activos = 0
        state.courses.forEach((curso) => {
            if (curso.terminado == false ) {
                activos++
            }
        })
        return activos
    },
    
    getCursos(state) {
        return state.courses.length
    }

}

export default getters