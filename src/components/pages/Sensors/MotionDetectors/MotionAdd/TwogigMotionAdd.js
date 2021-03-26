import React from 'react'
import TwogigMotion from '../../../../../pictures/2gig-motion.png'
import ASMotion from '../../../../../pictures/as-motion.png'
import { useSpring, animated } from 'react-spring';

function TwogigMotionAdd() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    return (
        <animated.div className="sensor-container" style={props}>
            <h1>Add Sensor</h1>
            <div className="sensor-wrapper">
                <div>
                    <img className="luna-table" src={ASMotion} alt="asmotion"></img>
                    <img className="twogig-table" src={TwogigMotion} alt="twogigmotion"></img>
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

export default TwogigMotionAdd
