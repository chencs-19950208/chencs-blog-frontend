import WrappedRoutes from '../router/index';

import Header from './components/header';

const Layout = () => {
  console.log(WrappedRoutes, 'WrappedRoutes --- ');
  return (
    <div>
      <Header />
    </div>
  )
};

export default Layout;