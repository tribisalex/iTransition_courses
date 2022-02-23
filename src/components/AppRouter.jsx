import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "./routes";
import HomePage from "../pages/HomePage";
import {useAuth} from "../hooks/use-auth";

const AppRouter = () => {
  const {isAuth} = useAuth();

  return (
    <div>
      <Routes>
        {isAuth && privateRoutes.map(({path, Element}) =>
          <Route key={path} path={path} element={<Element/>}/>
        )}
        {publicRoutes.map(({path, Element}) =>
          <Route key={path} path={path} element={<Element/>}/>
        )}
        <Route key= '*' path='*' element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;