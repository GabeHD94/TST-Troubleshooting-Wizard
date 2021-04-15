import React from 'react'
import { useSpring, animated } from 'react-spring';
import TGMotiontamp from '../../../../../pictures/2gig-motion.png'
import ASMotiontamp from '../../../../../pictures/as-motion.png'


function MotionTamper() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })


    return (
        <animated.div className="sensor-container" style={props}>
            <h1>Motion Sensor Tamper</h1>
            <div className="sensor-wrapper">
                <img className="sensor-pic-big" src={TGMotiontamp} alt="lunabatt"></img> 
                <img className="sensor-pic-big" src={ASMotiontamp} alt="lunabatt"></img> 
                <div className="sensor-steps-divider">
                </div>
                <ol className="dw-steps">
                    <li>Remove the Sensor from its mount</li>
                    <li>Test if the Tamper Switch is working properly by manually holding down the Tamper Switch 
                    <ul className="list-indent">
                            <li>While pressed down the ‘Tamper’ Signal should clear</li>
                            <li>When the Tamper Switch is released a new ‘Tamper’ Signal should send </li>
                            <li>If the Tamper Switch is not working properly, Replace the Sensor</li>
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


export default MotionTamper
