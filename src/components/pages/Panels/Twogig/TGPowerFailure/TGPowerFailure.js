import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TGPower from '../../../../../pictures/2GIG-Power.png';

function TGPowerFaliure() {
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
                        <h1>Power Failure</h1>
                        <h3 className="tg-mode">Overview</h3>
                    </div>
                        <img className="tg-panelpic" src={TGPower} alt="TGPanel" />
                        <div className="TG">
                        </div>

                        <ol className="tg-steps">
                            <li>Make sure the panel is plugged in to an outlet.
                    <ul className="list-indent">
                                    <li>Verify the outlet is a non-switch outlet (some outlets only have power when the light switch is turned on and don’t have power when the light switch is off).</li>
                                </ul>
                            </li>
                            <li>If the panel is plugged in, unplug it and plug in something else into the same outlet it was plugged in (a lamp, phone charger, etc.) to make sure the outlet works.</li>
                            <li>Check the back of the panel. Verify the power cord is plugged in securely in the back of the panel.</li>
                            <li>Disconnect the power cable from the panel, then disconnect the battery from the panel, while the power cable is disconnected. Then reconnect the power cable while the battery is still disconnected. When the panel powers on, reconnect the battery.</li>
                            <li>If the above troubleshooting doesn’t work, special request a new power cord.</li>
                        </ol>
                        {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                    </animated.div>
                </div>
                {/* // : <TGArmDisarmSS />} */}
                
        </div>
    )

}

export default TGPowerFaliure
