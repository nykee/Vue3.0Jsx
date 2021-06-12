import { createStore } from 'vuex'
export default createStore({
    state: {
        count: 0,
        userName:""
    },
    getters: {},
    mutations: {
        add(state) {
            state.count++;
        },
        setUserName(state,name){
            state.userName = name;
        }
    },
    actions: {
        add(ctx) {
            ctx.commit('add')
        },
        setUserName(ctx,name){
            ctx.commit("setUserName",name)
        }
    },
    modules: {}
})
