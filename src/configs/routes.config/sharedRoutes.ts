import { lazy } from 'react'
import type { Routes } from '@/@types/routes'
import Home from '@/views/Home'


// Define any routes here that both public & protected users should see:
const sharedRoutes: Routes = [
  // e.g.
  {
    key: 'homePage',
    path: '/',
    component: lazy(() => import('@/views/Home')),
    authority: [],
  },
]

export default sharedRoutes