import React, { Component } from "react";
import NavBar from "./components/navBar";
import UserRoute from "./components/common/userRoute";
import AdminRoute from "./components/common/adminRoute";
import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";
import AddPlan from "./components/addPlan";
import MyPlan from "./components/myPlan";
import AdminDashboard from "./components/adminDashboard";
import UserDashboard from "./components/userDashboard";
import ScheduleRide from "./components/scheduleRide";
import VehicleList from "./components/vehicleList";
import AddVehicle from "./components/addVehicle";
import SensorInfo from "./components/sensorInfo";
import MyRides from "./components/myRides";
import DeleteVehicle from "./components/deleteVehicle";
import { socketUrl } from "./config.json";
import { getJwt } from "./services/authService";
import "bootstrap/dist/css/bootstrap.min.css";
import { io } from "socket.io-client";
export const socket = io(socketUrl, {
  query: {
    jwtToken: getJwt(),
  },
});

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className='main-container'>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/register" component={Register}/>
            <Route path="/myPlan/addPlan" component={AddPlan}/>
            <Route path="/myPlan" component={MyPlan}/>
            <Route path="/myStatus" component={UserDashboard}/>
            <Route path="/mySchedule" component={ScheduleRide}/>
            <Route
              path="/myVehicles/addVehicle"
              component={AddVehicle}
            />
            <Route path="/myVehicles" component={VehicleList}/>
            <Route path="/sensorinfo" component={SensorInfo}/>
            <Route path="/myRides" component={MyRides}/>
            <Route
              path="/deleteVehicle"
              component={DeleteVehicle}
            />

            <Route
              path="/dashboard"
              component={AdminDashboard}
            />
            <Redirect from="/" exact to="/login"/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
