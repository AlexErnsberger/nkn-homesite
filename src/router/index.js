import Vue from 'vue'
import Router from 'vue-router'
import AboutPortal from '@/views/AboutPortal'
import CommunityPortal from '@/views/CommunityPortal'
import DeveloperPortal from '@/views/DeveloperPortal'
import HomePortal from '@/views/HomePortal'
import MinerPortal from '@/views/MinerPortal'
import PartnerPortal from '@/views/PartnerPortal'
import nknNamespace from '@/assets/js/nknNamespace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: nknNamespace.HOME,
      component: HomePortal
    },
    {
      path: '/about',
      name: nknNamespace.ABOUT,
      component: AboutPortal
    },
    {
      path: '/community',
      name: nknNamespace.COMMUNITY,
      component: CommunityPortal
    },
    {
      path: '/developer',
      name: nknNamespace.Developer,
      component: DeveloperPortal
    },
    {
      path: '/miner',
      name: nknNamespace.MINER,
      component: MinerPortal
    },
    {
      path: '/partner',
      name: nknNamespace.PARTNER,
      component: PartnerPortal
    }
  ]
})
