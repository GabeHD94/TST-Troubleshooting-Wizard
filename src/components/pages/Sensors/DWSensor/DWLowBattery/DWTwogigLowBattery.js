import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TwogigLowBatt from '../../../../../pictures/2gig-dw-inside.png'


function DWTwogigLowBattery() {
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
                        <img className="equipment-pic-twogig" src={TwogigLowBatt} alt="luna batt"></img>

                        <ol className="dw-steps">
                            <li>Pull the sensor from the top, the back plate should still be stuck on the wall.</li>
                            <li>Carefully pull the sensor's chip out of the casing</li>
                            <li>You can now easilly remove and replace the 2 batteries (Battery type :CR-2032) in the sensor.</li>
                            <li>Make sure that the batteries are facing the same way as they came out. </li>
                            <li>Once replaced, put the sensor chip back in the casing and attach again to the back plate.</li>
                        </ol>
                    </animated.div>
                </div>
        </div>
    )
}

export default DWTwogigLowBattery
