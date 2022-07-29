const mutations = {

    SET_USER(state, payload) {
        state.user = payload;
    },
    SET_USER_ERROR(state, payload) {
        state.userError = payload
    },

    CLEAN_COURSES(state) {
        state.courses = []
    },

    SET_COURSES(state, course) {
        state.courses.push({
            id: course.id,
            imagen: course.data().imagen,
            curso: course.data().curso,
            descripcion: course.data().descripcion,
            cupos: course.data().cupos,
            inscritos: course.data().inscritos,
            duracion: course.data().duracion,
            costo: course.data().costo,
            terminado: course.data().terminado,
            fecha: course.data().fecha,
        })
        state.loader = false
    },

    SET_COURSES_ERROR(state, payload) {
        state.coursesError = payload
    }

}

export default mutations