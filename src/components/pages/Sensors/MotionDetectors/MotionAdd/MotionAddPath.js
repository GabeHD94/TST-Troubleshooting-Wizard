import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AlarmcomMotionAdd from '../MotionAdd/AlarmcomMotionAdd';
import SecureNetMotionAdd from '../MotionAdd/SecureNetMotionAdd';
import LunaMotionAdd from './ASMotionAdd';
import TwogigMotionAdd from '../MotionAdd/TwogigMotionAdd';
import ASVector from '../../../../../pictures/ASVector.png';
import TwoGigVector from '../../../../../pictures/2GIGVector.png';

// import './MotionAddPath.css'

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
                    <Route path='/motion/add-sensor/alder-simple' component={LunaMotionAdd} />
                    <Route path='/motion/add-sensor/2gig' component={TwogigMotionAdd} />
                    <Route path='/motion/add-sensor/securenet' component={SecureNetMotionAdd} />
                    <Route path='/motion/add-sensor/alarm' component={AlarmcomMotionAdd} />
                    <div className='path-body'>
                        <animated.div style={props}>
                        <div className="sensor-table">
                    {/* <tbody> */}
                        <table>
                            <tr>
                            <h3>Add through panels</h3>
                            <Link to='/motion/add-sensor/2gig' className='dw-bars' >
                                <img className="twogig-vector" src={TwoGigVector} alt="OldDWSensor" ></img>
                            </Link>
                            <Link to='/motion/add-sensor/2gig' className='dw-bars' >
                                <img className="twogig-vector" src={TwoGigVector} alt="OldDWSensor" ></img>
                            </Link>
                            </tr>
                            <tr>
                            <h3>Add through monitoring sites</h3>
                            <Link to='/motion/add-sensor/2gig' className='dw-bars' >
                                <img className="twogig-vector" src={TwoGigVector} alt="OldDWSensor" ></img>
                            </Link>

                            <Link to='/motion/add-sensor/2gig' className='dw-bars' >
                                <img className="twogig-vector" src={TwoGigVector} alt="OldDWSensor" ></img>
                            </Link>
                            </tr>

                        </table>
                        </div>

                        </animated.div>
                    </div>
                </Switch>
            </Router>
        </div>
    )
}

export default DWAddPath
