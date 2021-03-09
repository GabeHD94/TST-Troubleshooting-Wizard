import React from 'react'
import DWAddSensor from '../ASDoorWindow/DWAddSensor/DWAddSensor'
import ASDoorWindowSidebar from '../ASDoorWindow/ASDoorWindowSidebar'

import './ASDoorWindow.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function ASDoorWindow() {
    return (
        <div className="alder-door-window-wrapper">
             <Router>
            <ASDoorWindowSidebar />
                <Switch>

                    <Route path='/dw-sensor/add-sensor' component={DWAddSensor}/>

                    <p>Alder Door/Window Sensor</p>
                </Switch>

            </Router>
        </div>
    )
}

export default ASDoorWindow
