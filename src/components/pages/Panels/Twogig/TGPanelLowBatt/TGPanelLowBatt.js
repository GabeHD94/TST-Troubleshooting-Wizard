import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TGLowBattery from '../../../../../pictures/2GIG-SecandServ.png';

function TGPanelLowBatt() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (

        <div className="tg-container">
            {/* {mode ? */}
                <div className='tg-body'>
                    <animated.div style={props}>
                    <div className="tg-headers">
                        <h1>Panel Low Battery</h1>
                        <h3 className="tg-mode">Overview</h3>
                    </div>
                        <img className="tg-panelpic" src={TGLowBattery} alt="TGPanel" />
                        <div className="TG">
                        </div>

                        <ol className="tg-steps">
                            <li>Check the top right corner of the screen on the panel. There will be an icon of a plug. Verify there is not a red X on the icon.</li>
                            <li>Ask the customer how long their panel has said "Low Battery".
                    <ul className="list-indent">
                                    <li>If it has been 2 days or less, let them know it will take a few days to fully recharge the panel.</li>
                                    <li>If it has been 3 days or more, send a hard reset.</li>
                                </ul>
                            </li>
                            <li>Check the back of the panel. Verify that the battery is plugged in.</li>
                        </ol>
                        {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                    </animated.div>
                </div>
                {/* // : <TGArmDisarmSS />} */}
                
        </div>
    )

}

export default TGPanelLowBatt
