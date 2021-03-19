import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DWAddSensorLuna from '../DWAddSensor/LunaDWAddSensor';
import DWAddSensorTwogig from '../DWAddSensor/TwogigDWAddSensor';
import ASVector from '../../../../../pictures/ASVector.png';
import TwoGigVector from '../../../../../pictures/2GIGVector.png';

import '../DWSensor.css'

// import TGArmDisarmSS from './TGArmDisarmSS'

function DWAddPath() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })


    return (

        <div className="dw-container">
                        <Router>
                <Switch>
                    <Route path='/dw-sensor/add-sensor/luna' component={DWAddSensorLuna}  />
                    <Route path='/dw-sensor/add-sensor/2gig' component={DWAddSensorTwogig} />
                <div className='dw-body'>
                    <animated.div style={props}>
                    <div className="dw-headers">
                        <h1>What panel are they using?</h1>
                    </div>
                    <h3 className="subheader">Alder Simple Panel</h3>
                    <Link to='/dw-sensor/add-sensor/luna' className='dw-bars' >
                    <img className="as-vector" src={ASVector} alt="AlderDW"></img>
                    </Link>
                    <h3>2GIG Panel</h3>
                    <Link to='/dw-sensor/add-sensor/2gig' className='dw-bars' >
                    <img className="twogig-vector" src={TwoGigVector} alt="OldDWSensor" ></img>
                    </Link>

                    </animated.div>
                </div>
                </Switch>
            </Router>
        </div>
    )
}

export default DWAddPath
