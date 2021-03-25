import React from 'react'
import '../../Sensors.css'
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
            <ol className="panel-steps">
                    <li>Remove the sensor from its mount </li>
                    <li>Test if the Tamper Switch is working properly by manually holding down the Tamper Switch
                    <ul className="list-indent">
                            <li>While pressed down the ‘Tamper’ Signal should clear</li>
                            <li>When the Tamper Switch is released a new ‘Tamper’ Signal should send</li>
                            <li>If the Tamper Switch is not working properly, Replace the Sensor.</li>
                        </ul>
                    </li>
                    <li>Place the Sensor back on its mount
                    <ul className="list-indent">
                            <li>If the Sensor is on securely the ‘Tamper’ Signal should clear</li>
                            <li>If the ‘Tamper’ Signal does not clear, make sure the sensor is on its mount securely; if the ‘Tamper’ Signal still does not clear, Replace the Sensor</li>
                        </ul>
                    </li>
                </ol>
        </div>
        </animated.div>

    )
}

export default DWTamper
