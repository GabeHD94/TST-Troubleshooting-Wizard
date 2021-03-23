import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DWLowBattLuna from '../DWLowBattery/DWLunaLowBattery';
import DWLowBattTwogig from '../DWLowBattery/DWTwogigLowBattery';
import LunaDW from '../../../../../pictures/AldersimpleDW.png';
import TwoGigDW from '../../../../../pictures/OldDW.png';

import '../DWSensor.css'

// import TGArmDisarmSS from './TGArmDisarmSS'

function DWBattPath() {
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
                    <Route path='/dw-sensor/low-battery/luna' component={DWLowBattLuna}  />
                    <Route path='/dw-sensor/low-battery/2gig' component={DWLowBattTwogig} />
                    
                <div className='dw-body'>
                    <animated.div style={props}>
                    <div className="dw-headers">
                        <h1>What sensor are they using?</h1>
                    </div>
                    <Link to='/dw-sensor/low-battery/luna' className='dw-bars' >
                    <img className="luna-btnhov" src={LunaDW} alt="AlderDW"></img>
                    </Link>
                    <Link to='/dw-sensor/low-battery/2gig' className='dw-bars' >
                    <img className="twogig-btnhov" src={TwoGigDW} alt="OldDWSensor" ></img>
                    </Link>
                    <table>
                            <tr>
                                <th>Luna Door/Window</th>
                                <th>2GIG Door/Window</th>
                            </tr>
                        </table>
                    </animated.div>
                </div>
                </Switch>
            </Router>
        </div>
    )
}

export default DWBattPath