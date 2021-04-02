import React from 'react'
import { useSpring, animated } from 'react-spring';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SecurenetMotion from '../../../../../../pictures/securenet-logo.png'
import AlarmcomMotion from '../../../../../../pictures/alarmcom-logo.png'
import TwogigPanel from '../../../../../../pictures/2GIG-Panel.png'
import ASPanel from '../../../../../../pictures/AS-Panel.png'
import AddASMotion from './AddAsMotion'
import AddTwogigMotion from '../Twogig-Motion/AddTwogigMotion'

import '../AddMotionPath.css'

function MotionHowToAdd() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-15%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(30%)" },
    })
    return (
        <animated.div style={props}>
            <h1>How is the sensor being added?</h1>
            <Router>
                <Switch>
                    <Route path='/motion/add-sensor/luna-motion/as-panel-add' component={AddASMotion} />
                    <Route path='/motion/add-sensor/2gig-motion/twogig-panel-add' component={AddTwogigMotion} />
                    <div className="waytoadd">
                        <Link to='/motion/add-sensor/luna-motion/as-panel-add'>
                            <img className="add-logos" src={ASPanel} alt="AlderASpanel"></img>
                        </Link>
                        <Link to='/motion/add-sensor/luna-motion/twogig-panel-add'>
                            <img className="add-logos-twogig" src={TwogigPanel} alt="Twogigpanel" ></img>
                        </Link>
                        <Link to='/motion/add-sensor/luna-motion/securenet'>
                            <img className="add-logos" src={SecurenetMotion} alt="SecurenetLink"></img>
                        </Link>
                        <Link to='/motion/add-sensor/luna-motion/alarmcom'>
                            <img className="add-logos" src={AlarmcomMotion} alt="AlarmLink"></img>
                        </Link>
                    </div>
                </Switch>
            </Router>
        </animated.div>

    )
}

export default MotionHowToAdd
