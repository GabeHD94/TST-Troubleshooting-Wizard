import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import LunaLowBatt from '../../../../../pictures/luna-dw-battery.png'
import '../../Sensors.css'




function DWLunaLowBattery() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })


    return (

        <animated.div className="sensor-container" style={props}>
            <h1>Low Battery</h1>
            <div className="sensor-wrapper">
                <img className="equipment-pic" src={LunaLowBatt} alt="lunz batt"></img>

                <div className="sensor-steps-divider">
                </div>
                <ol className="sensor-steps">
                    <li>Pull the sensor from the top, the back plate should still be stuck on the wall.</li>
                    <li>Carefully pull the sensor's chip out of the casing</li>
                    <li>(Pictured left) The yellow circles represent guards that hold the battery (Battery type :CR-2032) in place</li>
                    <li>Using an object with a point, push the battery out in the directions where there is no guard.</li>
                    <li>Replace the batteries making sure that the batteries are facing the same way as they came out. </li>
                </ol>
            </div>
        </animated.div>
    )
}

export default DWLunaLowBattery
