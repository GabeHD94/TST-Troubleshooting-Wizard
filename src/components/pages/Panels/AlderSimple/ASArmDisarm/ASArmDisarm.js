import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

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

        <animated.div className="panel-container" style={props}>
            <h1>Arm/Disarm</h1>
            <div className="panel-wrapper">
                <div>
                    <iframe src="https://xd.adobe.com/embed/b6da5216-f35e-4c9c-4a59-64934ecae8a4-c0eb/?fullscreen" width="537" height="316" frameborder="0" allowfullscreen></iframe>
                    <h4>Interactive</h4>
                </div>
                <div className="panel-steps-divider">
                </div>
                <ol className="panel-steps">
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
            </div>
        </animated.div>
    )
}

export default ASArmDisarm
