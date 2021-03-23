import React from 'react'
import '../DWTamper.css'
import { useSpring, animated } from 'react-spring';


function DWTamper() {

    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })


    return (
        <animated.div className="sensor-container" style={props}>
            <h1>Tamper</h1>
        <div className="sensor-wrapper">
            <iframe src="https://xd.adobe.com/embed/b6da5216-f35e-4c9c-4a59-64934ecae8a4-c0eb/?fullscreen" title="tamper" width="637" height="416" frameborder="0" allowfullscreen></iframe>
            <div className="sensor-steps-divider">
            </div>
            <ol className="sensor-steps">
                <li>Pull the sensor from the top, the back plate should still be stuck on the wall.</li>
                <li>Carefully pull the sensor's chip out of the casing</li>
                <li>(Pictured above) The yellow circles represent guards that hold the battery (Battery type :CR-2032) in place</li>
                <li>Using an object with a point, push the battery out in the directions where there is no guard.</li>
                <li>Replace the batteries making sure that the batteries are facing the same way as they came out. </li>
            </ol>
        </div>
        </animated.div>

    )
}

export default DWTamper
