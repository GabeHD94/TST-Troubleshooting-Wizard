import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import LunaLowBatt from '../../../../../pictures/luna-dw-battery.png'


function DWLunaLowBattery() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })


    return (

        <div className="dw-container">
                <div className='dw-body'>
                    <animated.div style={props}>
                    <div className="dw-headers">
                        <h1>Low Battery</h1>
                        <h3 className="dw-mode">Overview</h3>
                    </div>
                        <img className="equipment-pic" src={LunaLowBatt} alt="luna batt"></img>

                        <ol className="dw-steps">
                            <li>The yellow circles represent guards that hold the battery in place</li>
                            <li>Using an object with a point, push the battery out in the directions where there is no guard.</li>
                            <li>Replace the batteries making sure that the batteries are facing the same way as they came out. </li>    

                        </ol>
                    </animated.div>
                </div>
                
        </div>
    )
}

export default DWLunaLowBattery
