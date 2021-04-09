import React from 'react'
import { useSpring, animated } from 'react-spring';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SecurenetMotion from '../../../../../../pictures/securenet-logo.png'
import AlarmcomMotion from '../../../../../../pictures/alarmcom-logo.png'
import TwogigPanel from '../../../../../../pictures/2GIG-Panel.png'
import ASPanel from '../../../../../../pictures/AS-Panel.png'
import AddASMotion from './AddAsMotion'
import AddTwogigASMotion from '../AS-Motion/AddASMotionTGPanel'
import AddAlarmcomASMotion from '../AS-Motion/AddAsMotionAlarmcom'

import '../AddMotionPath.css'

function MotionHowToAdd() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-15%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(30%)" },
    })
    return (
        <Router>
            <Switch>
                <Route path='/motion/add-sensor/luna-motion/as-panel-add' component={AddASMotion} />
                <Route path='/motion/add-sensor/luna-motion/twogig-panel-add' component={AddTwogigASMotion} />
                <Route path='/motion/add-sensor/luna-motion/alarmcom-add' component={AddAlarmcomASMotion} />
                <animated.div style={props}>
                    <h1>How is the sensor being added?</h1>
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
                        <Link to='/motion/add-sensor/luna-motion/alarmcom-add'>
                            <img className="add-logos" src={AlarmcomMotion} alt="AlarmLink"></img>
                        </Link>
                    </div>
                </animated.div>
            </Switch>
        </Router>
    )
}

export default MotionHowToAdd
