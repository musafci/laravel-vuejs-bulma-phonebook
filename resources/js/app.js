require("./bootstrap.js");

window.Vue = require("vue");

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


let Myheader    = require("./components/Myheader.vue").default;
let Myfooter    = require("./components/Myfooter.vue").default;

let Home    = require("./components/Home.vue").default;
let About   = require("./components/About.vue").default;


const routes = [
    { path: "/home", component: Home },
    { path: "/about", component: About }
];

const router = new VueRouter({
    // mode: "history",
    routes
});


const app = new Vue({
    el: "#app",
    router,
    components: {Myheader,Myfooter}
});