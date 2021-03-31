import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DWAddSensorLuna from '../DWAddSensor/LunaDWAddSensor';
import DWAddSensorTwogig from '../DWAddSensor/TwogigDWAddSensor';
import ASVector from '../../../../../pictures/ASVector.png';
import TwoGigVector from '../../../../../pictures/2GIGVector.png';

import '../../Sensors.css'
import './DWAddSensorPath.css'

// import TGArmDisarmSS from './TGArmDisarmSS'

function DWAddPath() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })


    return (

        <div className="sensor-body-container">
            <Router>
                <Switch>
                    <Route path='/dw-sensor/add-sensor/luna' component={DWAddSensorLuna} />
                    <Route path='/dw-sensor/add-sensor/2gig' component={DWAddSensorTwogig} />
                        <animated.div style={props}>
                                <h1>What panel are they using?</h1>
                            <h3 className="subheader">Alder Simple Panel</h3>
                            <Link to='/dw-sensor/add-sensor/luna' >
                                <img className="as-vector" src={ASVector} alt="AlderDW"></img>
                            </Link>
                            <h3>2GIG Panel</h3>
                            <Link to='/dw-sensor/add-sensor/2gig' >
                                <img className="twogig-vector" src={TwoGigVector} alt="OldDWSensor" ></img>
                            </Link>

                        </animated.div>
                </Switch>
            </Router>
        </div>
    )
}

export default DWAddPath
