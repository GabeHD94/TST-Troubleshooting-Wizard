import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../Sensors.css'
import './AddMotionPath.css'
import ASMotionAdd from './AddAsMotion'
import TwogigMotionAdd from './AddTwogigMotion'
import TwogigMotion from '../../../../../pictures/2gig-motion.png'
import ASMotion from '../../../../../pictures/as-motion.png'
import SecurenetMotion from '../../../../../pictures/securenet-logo.png'
import AlarmcomMotion from '../../../../../pictures/alarmcom-logo.png'
import { useSpring, animated } from 'react-spring';




function AddMotionPath() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    return (
        <div className="sensor-body-container">
            <Router>
                <Switch>
                    <Route path='/motion/add-sensor/luna' component={ASMotionAdd} />
                    <Route path='/motion/add-sensor/2gig' component={TwogigMotionAdd} />
                    <animated.div style={props}>
                        <h1>What motion sensor are they using?</h1>
                        <h3 className="subheader">Alder Simple Motion</h3>
                        <Link to='/motion/add-sensor/luna'  >
                            <img className="as-motion-vector" src={ASMotion} alt="AlderDW"></img>
                        </Link>

                        <h3>2GIG Motion Sensor</h3>
                        <Link to='/motion/add-sensor/2gig'  >
                            <img className="twogig-motion-vector" src={TwogigMotion} alt="OldDWSensor" ></img>
                        </Link>

                    </animated.div>
                </Switch>
            </Router>
        </div>
    )
}

export default AddMotionPath