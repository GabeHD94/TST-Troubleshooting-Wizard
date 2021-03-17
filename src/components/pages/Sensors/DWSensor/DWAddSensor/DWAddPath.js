import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ASVector from '../../../../../pictures/ASVector.png'
import TwoGigVector from '../../../../../pictures/2GIGVector.png'
import LunaDWAddSensor from './LunaDWAddSensor'
import TwogigDWAddSensor from './TwogigDWAddSensor'
import '../DWSensor.css'

// import TGArmDisarmSS from './TGArmDisarmSS'

function DWAddPath() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    const [mode, setMode] = useState(true)


    return (

        <div className="dw-container">
            {mode ?
                <div className='dw-body'>
                    <animated.div style={props}>
                    <div className="dw-headers">
                        <h1>What panel are they using?</h1>
                    </div>
                    <img className="as-vector" src={ASVector} alt="AlderDW" onClick={() => setMode(!mode)}></img>
                    <h3>Alder Simple Panel</h3>
                    <img className="twogig-vector" src={TwoGigVector} alt="OldDWSensor" onClick={() => setMode(!mode)}></img>
                    <h3>2GIG Panel</h3>

                    </animated.div>
                </div>
                : <LunaDWAddSensor /> 
            }
            
        </div>
    )
}

export default DWAddPath
