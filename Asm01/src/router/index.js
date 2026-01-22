import { createRouter, createWebHistory } from 'vue-router'

import BlogList from '../views/BlogList.vue'
import BlogPost from '../views/BlogPost.vue'
import BlogDetail from '../views/BlogDetail.vue'

import OnProgress from '../views/OnProgress.vue'
import UserProfile from '../views/UserInfo.vue'

import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

const isAuthenticated = false;

const routes = [
    { path: '/', name: 'home', component: OnProgress },
    { path: '/login', name: 'login', component: Login },
    { path: '/signup', name: 'signup', component: SignUp },
    { path: '/blog', name: 'blogList', component: OnProgress }, //
    { path: '/blog/post', name: 'blogPost', component: BlogPost },
    { path: '/blog/post/:id', name: 'blogDetail', component: BlogDetail },
    {
        path: '/profile',
        name: 'userProfile',
        alias: '/me',
        component: UserProfile,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
        next({ name: "login" });
    } else {
        next();
    }
})

export default router;