/**
 * 路由数据解析
 * @param routes: Array<RouteType>
 * @return routes: Array<newRouteType>
 */
import { lazy } from "react";
import type { RouteType, NewRouteType } from "../types/routes";

export const assemblyRoutes = (routes: Array<RouteType>): Array<NewRouteType> | undefined => {
  if (routes.length === 0) {
    console.warn('请配置路由数据');
    return;
  };

  const generatorData = (routes: Array<RouteType>): Array<NewRouteType> => {
    return routes.map((route: RouteType) => {
      const Component = lazy(() => import(route.componentPath));

      if (route.children && route.children.length > 0) {
        return {
          path: route.path,
          label: route.label,
          component: <Component />,
          children: generatorData(route.children),
        }
      };

      return {
        path: route.path,
        label: route.label,
        component: <Component />,
      }
    })
  };
  
  return generatorData(routes);
}
