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
        <animated.div className="panel-container" style={props}>
            <h1>Power Failure</h1>
            <div className="panel-wrapper">
                <div>
                    <h4>Interactive</h4>
                    <img className="tg-panelpic" src={TGPower} alt="TGPanel" />

                </div>
                <div className="panel-steps-divider">
                </div>
                <ol className="panel-steps">
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
            </div>
        </animated.div>
    )

}

export default TGPowerFaliure
