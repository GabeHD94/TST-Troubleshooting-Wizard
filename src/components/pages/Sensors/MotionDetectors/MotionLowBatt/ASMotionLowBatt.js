import React from 'react'
import { useSpring, animated } from 'react-spring';
import ASMotionLowBattPic from '../../../../../pictures/as-motion-diagram.png'



function ASMotionLowBatt() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })


    return (
        <animated.div className="sensor-container" style={props}>
            <h1>Luna Motion Low Battery</h1>
            <div className="sensor-wrapper">
                <img className="step-pic" src={ASMotionLowBattPic} alt="lunabatt"></img>
                <div className="sensor-steps-divider">
                </div>
                <ol className="dw-steps">
                    <li>Remove the Sensor from its mount
                    <ul className="list-indent">
                            <li>The Sensor may send a ‘Tamper’ Signal</li>
                        </ul>
                    </li>
                    <li>Remove the Old Battery</li>
                    <li>Insert the New Battery (1x CR123A)
                    <ul className="list-indent">
                            <li>If the ‘Low Battery’ Signal has not cleared, Remove the Battery again and wait a few moments before placing the battery into the sensor again; if the ‘Low Battery’ Signal has still not cleared, Replace the Sensor</li>
                        </ul>
                    </li>
                    <li>Place the Sensor back on its mount
                    <ul className="list-indent">
                            <li>If the ‘Tamper’ Signal has not cleared refer to the ‘Tamper’ Section</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </animated.div>

    )
}

export default ASMotionLowBatt
