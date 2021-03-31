import React from 'react'
import MotionSidebar from '../MotionDetectors/MotionSidebar/MotionSidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../Sensors.css'
import TwogigMotion from '../../../../pictures/2gig-motion.png'
import ASMotion from '../../../../pictures/as-motion.png'
import AddMotionPath from '../MotionDetectors/MotionAdd/AddMotionPath'
import { useSpring, animated } from 'react-spring';


function MotionDetector() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })



    return (
        <div className="parent-sensor-container">
            <Router>
                <MotionSidebar />
                <Switch>
                    <Route path='/motion/add-sensor' component={AddMotionPath} />


                    <div className="sensor-body-container">
                        <animated.div style={props}>
                            <h1>Motion Detector</h1>
                            <h3 >Overview</h3>
                            {/* this is the same className as the images for the dw sensor */}
                            <img className="twogig-dws" src={ASMotion} alt="asmotion"></img>
                            <img className="luna-dws" src={TwogigMotion} alt="twogigmotion"></img>
                            {/* <tbody> */}
                            <table>
                                <tr>
                                    <th>Alder Simple Motion</th>
                                    <th>2GIG Motion</th>
                                </tr>
                                <tr>
                                    <th>Battery Type</th>
                                    <th>Battery type</th>
                                </tr>
                                <tr>
                                    <td>2x CR-2032</td>
                                    <td>2x CR-2032</td>
                                </tr>
                                <tr>
                                    <th>Compatibility</th>
                                    <th>Compatibility</th>
                                </tr>
                                <tr>
                                    <td>Alder Simple</td>
                                    <td>Alder Simple</td>
                                </tr>
                                <tr>
                                    <td>2GIG Panel</td>
                                    <td>2GIG Panel</td>
                                </tr>
                            </table>
                            {/* </tbody>  */}
                        </animated.div>
                        {/* </div> */}
                    </div>
                </Switch>
            </Router>
        </div>

    )
}

export default MotionDetector
