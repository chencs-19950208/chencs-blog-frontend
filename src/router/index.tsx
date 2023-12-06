import { useRoutes } from 'react-router-dom';

import { assemblyRoutes } from './assembly';
import type { RouteType, NewRouteType } from '../types/routes';

const routes: Array<RouteType> = [
  {
    path: '/home',
    label: '首页',
    componentPath: '../pages/home',
  },
  {
    path: '/personal',
    label: '个人中心',
    componentPath: '../pages/personalCenter',
  }
];

const newRoutes = assemblyRoutes(routes) as Array<NewRouteType>;
const WrappedRoutes = () => {
  useRoutes(newRoutes);
}

export default WrappedRoutes;