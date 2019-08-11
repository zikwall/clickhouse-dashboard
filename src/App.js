import React from 'react';

import ProtectedLayout from "./layouts/ProtectedLayout";
import AuthLayout from "./layouts/AuthLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorLayout from "./layouts/ErrorLayout"; //

const App = () =>  {
  return (
      <div className="application">
        <BrowserRouter>
          <Switch>
            <Route path="/auth" render={props => <AuthLayout {...props} />} />
            <Route path="/" render={props => <ProtectedLayout {...props} />} />

            <Route render={(props)=><ErrorLayout errorCode={404} {...props}/>}  />
          </Switch>
        </BrowserRouter>
      </div>
  );
};

export default App;