import React from 'react';
import '../../App.css';
import {AppContainerStyle} from "../styles/AppStyles";
import DashboardComponent from "../../Dashboard/components/DashboardComponent";
import SidebarComponent from "../../Dashboard/components/SidebarComponent";

function App() {
  return (
    <div style={AppContainerStyle}>
        <SidebarComponent/>
        <DashboardComponent/>
    </div>
  );
}

export default App;
