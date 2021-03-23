import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// import TGArmDisarmSS from './TGArmDisarmSS'

function LunaDWAddSensor() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (


        <animated.div className="sensor-container" style={props}>
            <h1>Add Sensor</h1>
            <div className="sensor-wrapper">
                <div>
                    <h4>Interactive</h4>
                    <iframe src="https://xd.adobe.com/embed/b6da5216-f35e-4c9c-4a59-64934ecae8a4-c0eb/?fullscreen" title="aspanel" width="637" height="416" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="sensor-steps-divider">
                </div>

                <ol className="dw-steps">
                    <li>Press the Home button (the arrow pointing up) on the panel.</li>
                    <li>Press "Settings".</li>
                    <li>Enter 4-Digit Passcode</li>
                    <li>Select "Sensors.
                    <ul className="list-indent">
                            <li>If it is for a door, select "Door"</li>
                            <li>If it is for a window, select "Window"</li>
                        </ul>
                    </li>
                    <li>Press "+ Add New Sensor"</li>
                    <li>Trigger the sensor
                    <ul className="list-indent">
                            <li>Bring the 2 pieces together, then seperate them.</li>
                        </ul>
                    </li>
                    <li>Name the door sensor with the given list.</li>
                    <li>Install the new sensor. Make sure the lines on the sensor are aligned when installed.</li>
                    <li>Press "Next" on the panel</li>
                    <li>Add more sensors if needed, if not press "Done Adding Sensors"</li>
                </ol>
            </div>
        </animated.div>
    )
}

export default LunaDWAddSensor
