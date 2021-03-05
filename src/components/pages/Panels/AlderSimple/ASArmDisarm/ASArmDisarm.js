import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ASPanel from '../../../../../pictures/AS-Panel.png';
// import TGArmDisarmSS from './TGArmDisarmSS'

function ASArmDisarm() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (

        <div className="alder-simple-container">
            {/* {mode ? */}
                <div className='alder-simple-body'>
                    <animated.div style={props}>
                    <div className="alder-simple-headers">
                        <h1>Arm/Disarm</h1>
                        <h3 className="alder-simple-mode">Overview</h3>
                    </div>
                        <img className="alder-simple-panelpic" src={ASPanel} alt="TGPanel" />
                        <div className="TG">
                        </div>

                        <ol className="alder-simple-steps">
                            <li>To arm the System to detect intrusions, ensure the System status field says, “Hey, I’m ready to arm.” Then arm the System in Stay Mode or Away Mode</li>
                            <li>Select "Stay" or "Away".
                    <ul className="list-indent">
                                    <li>Arming "Stay" will activate all sensors except for motion detectors.</li>
                                    <li>Arming "Away" will activate all sensors.</li>
                                </ul>
                            </li>
                            <li>The system will announce that it is arming and the countdown screen will appear.</li>
                            <li>Disarming the System:
                    <ul className="list-indent">
                                    <li>Tap the home button.</li>
                                    <li>Enter the 4-digit user passcode on the screen.</li>
                                </ul>
                            </li>
                        </ol>
                        {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                    </animated.div>
                </div>
                {/* : <TGArmDisarmSS />} */}
                
        </div>
    )
}

export default ASArmDisarm
