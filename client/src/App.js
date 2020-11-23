import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';
import { Provider } from 'react-redux';
import { chartjs } from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';
import store from './store';
import {
  Dashboard as DashboardView,
  SignUp as SignUpView,
} from './views';
import { Main as MainLayout } from './layouts';
import { RouteWithLayout } from './components';
import Login from 'views/Login/Login';




const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/login';
  }
}


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route exact path="/" component={Login} />
          <Route exact path="/sign-up" component={SignUpView} />
          <Switch>
            <RouteWithLayout
              component={DashboardView}
              exact
              layout={MainLayout}
              path="/dashboard"
            />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}
export default App;