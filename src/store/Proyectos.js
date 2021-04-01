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
                console.log('before fb');
                firebase.firestore().collection('proyectos')
                    .onSnapshot((querySnapshot) => {
                        var projects = [];
                        querySnapshot.forEach((doc) => {
                            projects.push(doc.data());

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