import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../Sensors.css'
import TGMotionLowBatt from './TGMotionLowBatt'
import ASMotionLowBatt from './ASMotionLowBatt'
import TwogigMotion from '../../../../../pictures/2gig-motion.png'
import ASMotion from '../../../../../pictures/as-motion.png'

import { useSpring, animated } from 'react-spring';




function MotionLowBattPath() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-30%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(30%)" },
    })

    
    return (
        <div className="sensor-body-container">
            <Router>
                <Switch>
                    <Route path='/motion/low-battery/luna-motion' component={ASMotionLowBatt} />
                    <Route path='/motion/low-battery/2gig-motion' component={TGMotionLowBatt} />
                    <animated.div style={props}>
                        <h1>What motion sensor a low battery?</h1>
                        <h3 className="subheader">Luna Motion</h3>
                        <Link to='/motion/low-battery/luna-motion'  >
                            <img className="as-motion-vector" src={ASMotion} alt="AlderDW"></img>
                        </Link>

                        <h3>2GIG Motion</h3>
                        <Link to='/motion/low-battery/2gig-motion'>
                            <img className="twogig-motion-vector" src={TwogigMotion} alt="OldDWSensor" ></img>
                        </Link>
                    </animated.div>
                </Switch>
            </Router>
        </div>
    )
}

export default MotionLowBattPath