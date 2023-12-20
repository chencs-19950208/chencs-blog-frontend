/**
 * 路由
 */

import Home from '@/pages/home';
import Personal from '@/pages/personal';

declare interface RouteProps {
  path: string;
  component: () => React.JSX.Element,
}

const routes: RouteProps[] = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/personal',
    component: Personal,
  }
];

const useRoutes = () => {
  console.log(location, 'location --- ');
  const { hash } = location;
  if (!hash) {
    return Home();
  }
  const path = hash.split('#')[1];
  const routeFilter = routes.filter((col: RouteProps) => col.path === path);
  if (routeFilter.length > 0) {
    return routeFilter[0].component()
  } else {
    return Home();
  }
}

export default useRoutes;