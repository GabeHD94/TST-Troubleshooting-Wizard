import React from 'react'
import DWSidebar from './DWSidebar/DWSidebar';
import DWAddSensor from '../DWSensor/DWAddSensor/DWAddSensor'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './DWSensor.css'

function DWSensor() {

    
    return (
        <div className="dw-sensor-wrapper">
            <Router>
            <DWSidebar />
                <Switch>
                    <Route path='/dw-sensor/add-sensor' component={DWAddSensor}/>


                    <p className="dw-placeholder">Door/Window Sensor</p>
                </Switch>

            </Router>
        </div> 

    )
}

export default DWSensor
