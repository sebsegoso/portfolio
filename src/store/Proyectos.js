import firebase from 'firebase'

export default {
    namespaced: true,
    state: {
        projects: []
    },
    mutations: {
        PROJECTS_UPDATED(state, projects) {
            state.projects = projects
        }
    },
    actions: {
        getProjects({ commit }) {
            try {
                firebase
                    .firestore()
                    .collection('proyectos')
                    .onSnapshot((querySnapshot) => {
                        var projects = [];
                        querySnapshot.forEach((doc) => {
                            let data = doc.data()
                            data.id = doc.id
                            projects.push(data);

                        });
                        commit('PROJECTS_UPDATED', projects)
                    });
            }
            catch (error) {
                alert(error.message)
            }
        },
    },
    getters: {
    }
}