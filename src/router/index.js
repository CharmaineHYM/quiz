import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Score from '../views/Score.vue'
import Questions from '../views/Questions.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/score',
    name: 'Score',
    component: Score,
    props: true
  },
  {
    path: '/questions/:id',
    name: 'Questions',
    component: Questions,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
