import React, { useContext } from 'react'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { AuthContext } from '../Global/Context/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { AuthenticationPage } from '../Authentication/pages/AuthenticationPage';
import { MainPage } from '../Global/MainPage';
import { LoginPage } from '../Authentication/pages/LoginPage';

import { ProjectsRouter } from './ProjectsRouter';
import { CreateProjectContainer } from '../Projects/components/CreateProjectContainer';
import { HomeNavigation } from '../Global/Navigation/HomeNavigation';
import { PublicRoutes } from './PublicRoutes';
import { AppNavigation } from '../Global/Navigation/AppNavigation';
import { Home } from '../Global/Home';


export const AppRouter = () => {

  const { user } = useContext(AuthContext);

  console.log('user in router', user)
  return (<>
    {user ? <AppNavigation /> : <HomeNavigation />}
    <Router>
      <div>
        <Switch>
          <PrivateRoute
            path='/projects'
            component={ProjectsRouter}
            isAuthenticated={user}
          />
          <PublicRoute
            exact
            path='/login'
            component={LoginPage}
            isAuthenticated={user}
          />

          <PublicRoute
            exact
            path='/signup'
            component={AuthenticationPage}
            isAuthenticated={user}
          />
          {user ? <PublicRoute
            path='/'
            component={Home}
          /> :
            <PublicRoute
              path='/'
              component={MainPage}
            />}


        </Switch>
      </div>
    </Router>
  </>)
}
