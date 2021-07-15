import emailjs from 'emailjs-com'

const service_ID = 'sebsegoso_psip6lr'
const user_ID = 'user_6Pa5YXJkZ9r8RtljWeF03';

export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        newMessageNotification({commit} , payload){
            console.log(payload, emailjs);
        }
    },
    getters: {
    }
}