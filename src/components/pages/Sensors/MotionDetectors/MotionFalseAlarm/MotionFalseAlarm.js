import React from 'react'
import TGMotionFalseAlarm from '../../../../../pictures/2gig-motion.png'
import ASMotionFalseAlarm from '../../../../../pictures/as-motion.png'
import {useSpring, animated} from 'react-spring'

function MotionFalseAlarm() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })

    return (
        <animated.div className="sensor-container" style={props}>
            <h1>Motion False Alarm</h1>
            <div className="sensor-wrapper">
                <img className="sensor-pic-big" src={TGMotionFalseAlarm} alt="lunabatt"></img>
                <img className="sensor-pic-big" src={ASMotionFalseAlarm} alt="lunabatt"></img>
                <div className="sensor-steps-divider">
                </div>
                <ol className="dw-steps">
                    <li>Check if the Sensor is positioned correctly
                    <ul className="list-indent">
                            <li>The Motion Detector should be at least 7 feet from the floor</li>
                            <li>The Motion Detector shouldn’t be pointed out a window</li>
                            <li>The Motion Detector shouldn’t be placed underneath a heating vent</li>
                        </ul>
                    </li>
                    <li>Check the Sensitivity Settings for the Motion Detector
                    <ul className="list-indent">
                            <li>Refer to [Motion Detector Sensitivity Settings Link] on how to adjust the Sensitivity of the Motion Detector</li>
                        </ul>
                    </li>
                    <li>Check the Alarm History for re-occurring problems that could cause a False Alarm
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

export default MotionFalseAlarm
