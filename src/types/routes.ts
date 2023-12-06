export interface RouteType {
  path: string;
  label: string;
  componentPath: string;
  children?: Array<RouteType>
};

export interface NewRouteType {
  path: string;
  label: string;
  component: React.ReactNode,
  children?: Array<NewRouteType>
}