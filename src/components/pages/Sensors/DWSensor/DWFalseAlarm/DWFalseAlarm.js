import React from 'react'
import { useSpring, animated } from 'react-spring';


function DWFalseAlarm() {

    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })

    return (

        <animated.div className="sensor-container" style={props}>
            <h1>False Alarm</h1>
            <div className="sensor-wrapper">
                <iframe src="https://xd.adobe.com/embed/b6da5216-f35e-4c9c-4a59-64934ecae8a4-c0eb/?fullscreen" title="tamper" width="637" height="416" frameborder="0" allowfullscreen></iframe>
                <div className="sensor-steps-divider">
                </div>
                <ol className="panel-steps">
                    <li>Check if the Sensor is positioned correctly 
                    <ul className="list-indent">
                            <li>Refer to the ‘False Open’ Section </li>
                        </ul>
                    </li>
                    <li>Check if the Door can shake causing it to “Open”
                    <ul className="list-indent">
                            <li>If it can see if you can tighten the door or re-position the sensor</li>
                        </ul>
                    </li>
                    <li>Check the Alarm History for re-occurring problems that could cause a False Alarm (Tamper, False Open)
                    <ul className="list-indent">
                            <li>Refer to the appropriate section to resolve any problems</li>
                            <li>If the Sensor is still causing False Alarms, Replace the Sensor</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </animated.div>
    )
}

export default DWFalseAlarm
