import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
  {
    key: 'dashboard',
    path: '/dashboard',
    component: lazy(() => import('@/pages/Dashboard')),
    authority: []
  },
  {
    key: 'chughtai-download',
    path: '/chughtai-download',
    component: lazy(() => import('@/pages/ChughtaiDownload')),
    authority: []
  },
  {
    key: 'rekhta-download',
    path: '/rekhta-download',
    component: lazy(() => import('@/pages/RekhtaDownload')),
    authority: []
  }
]
