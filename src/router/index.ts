import {
    createRouter,
    createWebHistory
} from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import PostsView from '../views/PostListView.vue';
import PostDetailView from '../views/PostDetailView.vue';
import PostContentView from '../views/PostContentView.vue';
import PostCommentsView from '../views/PostCommentsView.vue';

const router = createRouter({
    history: createWebHistory(),

    routes: [{
        path: '/',
        name: 'home',
        component: HomeView
    }, {
        path: '/about',
        name: 'about',
        component: AboutView
    }, {
        path: '/posts',
        name: 'posts',
        component: PostsView
    }, {
        path: "/posts/:id",
        name: "post-detail",
        component: PostDetailView,
        children: [{
            path: "",
            component: PostContentView
        }, {
            path: "comments",
            component: PostCommentsView
        }]
    }]
});

export default router;