import React from 'react'
import DWAddSensor from '../ASDoorWindow/DWAddSensor/DWAddSensor'
import ASDoorWindowSidebar from '../ASDoorWindow/ASDoorWindowSidebar'
import {useSpring, animated} from 'react-spring'


import './ASDoorWindow.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function ASDoorWindow() {

    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })

    return (
    <animated.div style={props}>
        <div className="alder-door-window-container">

            <div className="sidebar-space">
            <ASDoorWindowSidebar />
            </div>

            <div className="alder-door-window-wrapper">
             <Router>
                <Switch>
                    <Route path='/dw-sensor/add-sensor' component={DWAddSensor}/>
                    <p>Alder Door/Window Sensor</p>
                </Switch>
            </Router>
        </div>
        </div>
        </animated.div>
    )
}

export default ASDoorWindow
