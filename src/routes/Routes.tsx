import * as React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import { MainWrapper } from "../containers/Layout/LayoutComponents/LayoutComponent";
import EmployeesList from '../containers/Layout/LayoutComponents/Content/Employees/EmployeesList';


export default () => (
  <Switch>
    {/*<Route path="/activate" component={ActivateUser} />*/}
    {/*<Route path="/auth" component={Auth} />*/}
    {/*<Route path="/creator" component={Creator} />*/}
    <MainWrapper>
      {/*<Route exact={true} path="/" component={Home} />*/}
      {/*<Route path="/dashboard" component={Dashboard} />*/}
      {/*<Route path="/users" component={UserList} />*/}
      {/*<Route path="/devices" component={DevicesList} />*/}
      {/*<Route path="/userlist-details" component={UserListDetails} />*/}
      <Route path={"/employees"} component={EmployeesList}/>
    </MainWrapper>
    <Route component={NotFound} />
  </Switch>
);
