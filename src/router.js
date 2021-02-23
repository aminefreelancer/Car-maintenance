import Vue from "vue";
import Router from "vue-router";
import Users from './components/Users'
import Add from './components/Add'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "users",
            component: Users
        },
        {
            path: "/add",
            name: "add",
            component: Add
        },
    ]
});