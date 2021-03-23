import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import "../../Panels.css"

// import TGArmDisarmSS from './TGArmDisarmSS'

function TGArmDisarm() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (
        <animated.div className="panel-container" style={props}>
            <h1>Arm Disarm</h1>
            <div className="panel-wrapper">
                
                <div>
                    <h4>Interactive</h4>
                    <iframe width="512" height="402" src="https://xd.adobe.com/embed/b258dd1a-ea8d-4e73-6266-499e4f36df7f-c469/" frameborder="0" allowfullscreen="1"></iframe>
                </div>
                
                <div className="panel-steps-divider">
                </div>

                <ol className="panel-steps">
                    <li>Press the Home button (the arrow pointing up) on the panel.</li>
                    <li>Press "Security".</li>
                    <li>Press "Arm".</li>
                    <li>Select "Stay" or "Away".
                    <ul className="list-indent">
                            <li>Arming "Stay" will activate all sensors except for motion detectors.</li>
                            <li>Arming "Away" will activate all sensors.</li>
                        </ul>
                    </li>
                    <li>The system will count down. Once the timer reaches 0, the system is armed.</li>
                    <li>Disarming the System:
                    <ul className="list-indent">
                            <li>Press the Home button (Arrow Pointing Up) on the panel.</li>
                            <li>Press "Security".</li>
                            <li>Press "Disarm".</li>
                            <li>Enter the 4-digit code.</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </animated.div>
    )
}

export default TGArmDisarm
