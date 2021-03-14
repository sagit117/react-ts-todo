import { lazy } from "react";

const TodosComponent = lazy(() => import('../components/TodosComponents'))
const TheHome = lazy(() => import('../components/TheHome'))
const NotFound = lazy(() => import('../components/NotFound'))

const routes = [
    {
        path: '/home',
        exact: true,
        component: TheHome,
    },
    {
        path: '/',
        exact: true,
        component: TheHome,
    },
    {
        path: '/todos',
        exact: true,
        component: TodosComponent
    },
    {
        path: '*',
        component: NotFound
    }
]

export default routes
