import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {useSpring, animated} from 'react-spring'
import GlassBreakSidebar from './GlassBreakSidebar/GlassBreakSidebar'

function GlassBreak() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    return (
        <div className="parent-sensor-container">
            <Router>
                <GlassBreakSidebar />
                <Switch>
                    {/* <Route path='/motion/add-sensor' component={AddMotionPath} />
                    <Route path='/motion/low-battery' component={LowBattMotionPath} />
                    <Route path='/motion/tamper' component={TamperMotion} />
                    <Route path='/motion/loss-supervision' component={LossOfSupMotion} />
                    <Route path='/motion/false-alarm' component={FalseAlarmMotion} /> */}


                    <div className="sensor-body-container">
                        <animated.div style={props}>
                            <h1>Glass Break</h1>
                            <h3 >Overview</h3>
                            {/* this is the same className as the images for the dw sensor */}
                            {/* <img className="sensor-pic-big" src={ASMotion} alt="asmotion"></img>
                            <img className="sensor-pic-medium" src={TwogigMotion} alt="twogigmotion"></img> */}
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

export default GlassBreak
