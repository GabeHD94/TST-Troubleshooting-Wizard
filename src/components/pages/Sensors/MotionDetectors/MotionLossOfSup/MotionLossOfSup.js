import React from 'react'
import { useSpring, animated } from 'react-spring';
import TGMotionLoss from '../../../../../pictures/2gig-motion.png'
import ASMotionLoss from '../../../../../pictures/as-motion.png'

function MotionLossOfSup() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })

    return (
        <animated.div className="sensor-container" style={props}>
            <h1>Motion Loss of Supervision</h1>
            <div className="sensor-wrapper">
                <img className="sensor-pic-big" src={TGMotionLoss} alt="lunabatt"></img>
                <img className="sensor-pic-big" src={ASMotionLoss} alt="lunabatt"></img>
                <div className="sensor-steps-divider">
                </div>
                <ol className="dw-steps">
                    <li>Remove the Sensor from its mount
                    <ul className="list-indent">
                            <li>If a ‘Tamper’ Signal is sent the ‘Loss of Supervision’ Signal should clear, Skip to Step 3</li>
                        </ul>
                    </li>
                    <li>Replace the Battery (1x CR123A)
                    <ul className="list-indent">
                            <li>Refer to the ‘Low Battery’ Section </li>
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

export default MotionLossOfSup
