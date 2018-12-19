import Vue from 'vue'
import Router from 'vue-router'
import AboutPortal from '@/views/AboutPortal'
import CommunityPortal from '@/views/CommunityPortal'
import DeveloperPortal from '@/views/DeveloperPortal'
import HomePortal from '@/views/HomePortal'
import MinerPortal from '@/views/MinerPortal'
import PartnerPortal from '@/views/PartnerPortal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePortal
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPortal
    },
    {
      path: '/community',
      name: 'community',
      component: CommunityPortal
    },
    {
      path: '/developer',
      name: 'developer',
      component: DeveloperPortal
    },
    {
      path: '/miner',
      name: 'miner',
      component: MinerPortal
    },
    {
      path: '/partner',
      name: 'partner',
      component: PartnerPortal
    }
  ]
})
