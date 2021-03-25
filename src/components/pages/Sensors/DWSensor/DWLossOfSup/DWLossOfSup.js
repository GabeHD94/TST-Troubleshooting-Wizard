import React from 'react'
import { useSpring, animated } from 'react-spring';


function DWLossOfSup() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    return (

        <animated.div className="sensor-container" style={props}>
            <h1>Loss of Supervision</h1>
            <div className="sensor-wrapper">
                <iframe src="https://xd.adobe.com/embed/b6da5216-f35e-4c9c-4a59-64934ecae8a4-c0eb/?fullscreen" title="tamper" width="637" height="416" frameborder="0" allowfullscreen></iframe>
                <div className="sensor-steps-divider">
                </div>
                <ol className="panel-steps">
                    <li>Remove the Sensor from its mount
                    <ul className="list-indent">
                            <li>If a ‘Tamper’ Signal is sent the ‘Loss of Supervision’ Signal should clear, Skip to Step 3</li>
                        </ul>
                    </li>
                    <li>Replace the Batteries
                    <ul className="list-indent">
                            <li>Refer to the ‘Low Battery’ Section</li>
                        </ul>
                    </li>
                    <li>Place the Sensor back on its mount
                    <ul className="list-indent">
                            <li>If the ‘Loss of Supervision’ Signal has not cleared, Proceed to the Next Step</li>
                        </ul>
                    </li>
                    <li>Check the Sensors Programming
                    <ul className="list-indent">
                            <li>Refer to the appropriate Programming Information</li>
                            <li>If the Sensor Programming is correct, Delete the Sensor and Program it in as a New Sensor</li>
                            <li>If the ‘Loss of Supervision’ Signal has not cleared, Replace the Sensor</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </animated.div>

    )
}

export default DWLossOfSup
