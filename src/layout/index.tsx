import React from 'react';

import useRoutes from '@/router/main';

const CommonLayout = () => {
  return (
    <div>{useRoutes()}</div>
  )
};

export default CommonLayout;