import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SummaryView from '@/views/SummaryView.vue'
import MapView from '@/views/MapView.vue'
import SurveyView from '@/views/SurveyView.vue'
import AboutDevView from '@/views/AboutDevsView.vue'
import ScheduleView from '@/views/ScheduleView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/summary', name: 'summary', component: SummaryView },
  { path: '/map', name: 'map', component: MapView },
  { path: '/survey', name: 'survey', component: SurveyView },
  { path: '/about-dev', name: 'aboutDevs', component: AboutDevView },
  { path: '/schedule', name: 'schedule', component: ScheduleView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Cancel speech on every route change
router.beforeEach((to, from, next) => {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel()
  }
  next()
})

export default router