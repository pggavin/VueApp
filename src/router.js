/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
            path:"/",
            name:"Home",
            component: () => import('@/routes/HomeView.vue'),
            props: { name: "DemoApp"}
        },{
            path:"/about",
            name:"About",
            component: () => import('@/routes/AboutView.vue')
        },{
            path:"/info",
            name:"Info",
            component: () => import('@/routes/Vue3InfoView.vue')
        },{
            path:"/charts",
            name:"Charts",
            component: () => import('@/routes/ChartsView.vue')
        }
    ]
});

export default router;