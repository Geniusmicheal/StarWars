import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import Container from './src/container';
import Detail from './src/page/Detail';
import Home from './src/page/Home';




const Routes  = () => {
  let pageRoutes = useRoutes([ 
    {path: '/', element: <Container />, children: [
        { path: '/', element: <Home/> },
        { path: '/person/:id', element: <Detail/> },
        // {path: '*', element: <PageNotFound />}
    ]},
    
  ]);

  return pageRoutes;
}

export default Routes;
