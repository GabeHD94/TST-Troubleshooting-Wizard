import React from 'react'
import MotionSidebar from '../MotionDetectors/MotionSidebar/MotionSidebar';
 import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 import MotionAddPath from './MotionAdd/MotionAddPath'
import '../Sensors.css'
import TwogigMotion from '../../../../pictures/2gig-motion.png'
import ASMotion from '../../../../pictures/as-motion.png'
import { useSpring, animated } from 'react-spring';


function DWSensor() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })

 
    
    return (
        <div className="dw-sensor-wrapper">

            <Router>
            <MotionSidebar />
                <Switch>
                <Route path='/motion/add-sensor' component={MotionAddPath}/>
                    {/* <Route path='/motion/low-battery' component={DWLowBattPath}/>
                    <Route path='/motion/tamper' component={DWTamper}/>
                    <Route path='/motion/loss-supervision' component={DWLossSupervision}/>
                    <Route path='/motion/false-alarm' component={DWFalseAlarm}/> */}

                    <div className="dw-container">
                <div className='dw-body'>
                    <animated.div style={props}>
                    <div className="dw-headers">
                        <h1>Motion Detector</h1>
                        <h3 className="dw-mode">Overview</h3>
                    </div>
                    <div className="sensor-table">
                    <img className="luna-table" src={ASMotion} alt="asmotion"></img>
                    <img className="twogig-table" src={TwogigMotion} alt="twogigmotion"></img>
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
                                <td>CR123A</td>
                                <td>CR123A</td>
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
                        </div>
                        {/* </tbody>  */}
                    </animated.div>
                </div>
        </div>
                </Switch>
            </Router>
        </div> 

    )
}

export default DWSensor
