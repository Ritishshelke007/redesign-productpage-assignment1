import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import AuthorityGuard from './AuthorityGuard'
import AppRoute from './AppRoute'
import PageContainer from '@/components/template/PageContainer'
import { protectedRoutes, publicRoutes } from '@/configs/routes.config'
import appConfig from '@/configs/app.config'
import { useAuth } from '@/auth'
import { Routes, Route, Navigate } from 'react-router-dom'
import type { LayoutType } from '@/@types/theme'
import { lazy } from 'react'
import Home from "@/views/Home"

interface ViewsProps {
    pageContainerType?: 'default' | 'gutterless' | 'contained'
    layout?: LayoutType
}

type AllRoutesProps = ViewsProps

const { authenticatedEntryPath } = appConfig

const AllRoutes = (props: AllRoutesProps) => {
    const { user } = useAuth()

    return (
        <Routes>
    {/* Home page always public */}
    <Route
    path="/"
    element={
        <PageContainer {...props}>
            <AppRoute
                routeKey="homePage"
                component={Home}
            />
        </PageContainer>
    }
/>

    {/* Protected routes */}
    <Route element={<ProtectedRoute />}>
        {protectedRoutes.map((route, index) => (
            <Route
                key={route.key + index}
                path={route.path}
                element={
                    <AuthorityGuard
                        userAuthority={user.authority}
                        authority={route.authority}
                    >
                        <PageContainer {...props} {...route.meta}>
                            <AppRoute
                                routeKey={route.key}
                                component={route.component}
                                {...route.meta}
                            />
                        </PageContainer>
                    </AuthorityGuard>
                }
            />
        ))}
    </Route>

    {/* Public routes (other than '/') */}
    <Route element={<PublicRoute />}>
        {publicRoutes
            .filter(route => route.path !== '/')
            .map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={
                        <AppRoute
                            routeKey={route.key}
                            component={route.component}
                            {...route.meta}
                        />
                    }
                />
            ))}
    </Route>
</Routes>
    )
}

export default AllRoutes
