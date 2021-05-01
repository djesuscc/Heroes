import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/ui/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={LoginScreen}
          isAuth={logged}
        />
        <PrivateRoute path="/" component={DashboardRoutes} isAuth={logged} />
      </Switch>
    </Router>
  );
};
