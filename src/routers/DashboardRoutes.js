import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroeScreen } from "../components/heroe/HeroeScreen";
import { Marvel } from "../components/marvel/Marvel";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/marvel" component={Marvel} />
          <Route exact path="/hero/:heroId" component={HeroeScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
