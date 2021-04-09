import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import TwogigPanelBtn from '../../../../../../pictures/2GIG-Panel.png'
import ASPanelBtn from '../../../../../../pictures/AS-Panel.png'
import AlarmcomBtn from '../../../../../../pictures/alarmcom-logo.png'
import SecurenetBtn from '../../../../../../pictures/securenet-logo.png'
import AlarmcomTwogigMotionAdd from './AddTwogigMotionAlarmcom'
import SecurenetTwogigMotionAdd from './AddTwogigMotionSecurenet'
import ASTwogigMotionAdd from './AddTwogigMotionAS'
import TGTwogigMotionAdd from './AddTwogigMotionTG'



function AddTwogigMotionAddWay() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-15%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(30%)" },
    })
    return (
        <Router>
            <Switch>
                <Route path='/motion/add-sensor/2gig-motion/as-panel-add' component={ASTwogigMotionAdd} />
                <Route path='/motion/add-sensor/2gig-motion/twogig-panel-add' component={TGTwogigMotionAdd} />
                <Route path='/motion/add-sensor/2gig-motion/alarmcom-add' component={AlarmcomTwogigMotionAdd} />
                <Route path='/motion/add-sensor/2gig-motion/securenet-add' component={SecurenetTwogigMotionAdd} />
                <animated.div style={props}>
                    <h1>How is the sensor being added?</h1>
                    <div className="waytoadd">
                        <Link to='/motion/add-sensor/2gig-motion/as-panel-add'>
                            <img className="add-logos" src={ASPanelBtn} alt="AlderASpanel"></img>
                        </Link>
                        <Link to='/motion/add-sensor/2gig-motion/twogig-panel-add'>
                            <img className="add-logos-twogig" src={TwogigPanelBtn} alt="Twogigpanel" ></img>
                        </Link>
                        <Link to='/motion/add-sensor/2gig-motion/securenet-add'>
                            <img className="add-logos" src={SecurenetBtn} alt="SecurenetLink"></img>
                        </Link>
                        <Link to='/motion/add-sensor/2gig-motion/alarmcom-add'>
                            <img className="add-logos" src={AlarmcomBtn} alt="AlarmLink"></img>
                        </Link>
                    </div>
                </animated.div>
            </Switch>
        </Router>
    )
}

export default AddTwogigMotionAddWay
