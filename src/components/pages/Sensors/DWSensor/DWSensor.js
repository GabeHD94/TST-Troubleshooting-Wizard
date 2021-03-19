import React from 'react'
import DWSidebar from './DWSidebar/DWSidebar';
import DWAddSensorPath from './DWAddSensor/DWAddPath'
import DWLowBattPath from './DWLowBattery/DWBattPath'
 import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './DWSensor.css'
import LunaDW from '../../../../pictures/AldersimpleDW.png'
import OldDW from '../../../../pictures/OldDW.png'
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
            <DWSidebar />
                <Switch>
                    <Route path='/dw-sensor/add-sensor' component={DWAddSensorPath}/>
                    <Route path='/dw-sensor/low-battery' component={DWLowBattPath}/>
                    <div className="dw-container">
                <div className='dw-body'>
                    <animated.div style={props}>
                    <div className="dw-headers">
                        <h1>Door/Window Sensor</h1>
                        <h3 className="dw-mode">Overview</h3>
                    </div>
                    <img className="luna-dws" src={LunaDW} alt="AlderDW"></img>
                    <img className="twogig-dws" src={OldDW} alt="OldDWSensor"></img>
                    {/* <tbody> */}
                        <table>
                            <tr>
                                <th>Luna Door/Window</th>
                                <th>2GIG Door/Window</th>
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
                </div>
        </div>
                </Switch>
            </Router>
        </div> 

    )
}

export default DWSensor
