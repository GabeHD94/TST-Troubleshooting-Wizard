import React from 'react'
import { useSpring, animated } from 'react-spring';


function AddTwogigMotionAS() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-15%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(30%)" },
    }) 
    return (
        <animated.div className="sensor-container" style={props}>
            <h1>Adding Sensor</h1>
            <div className="sensor-wrapper">
                <iframe src="https://xd.adobe.com/embed/b6da5216-f35e-4c9c-4a59-64934ecae8a4-c0eb/?fullscreen" title="tamper" width="637" height="416" frameborder="0" allowfullscreen></iframe>
                <div className="sensor-steps-divider">
                </div>
                <ol className="panel-steps">
                <li>Press ‘Settings’ in the Top Right Corner</li>
                <li>Enter the Panel Code</li>
                <li>Press ‘Sensors’</li>
                <li>Press ‘Motion’</li>
                <li>Press ‘Add New Sensor’</li>
                <li>Trigger the Motion Detector by pressing the Test Button or Tampering the Sensor</li>
                <li>Choose a name for the Sensor</li>
                <li>Press ‘Done Adding Motion’</li>
                </ol>
            </div>
        </animated.div>
    )
}

export default AddTwogigMotionAS
