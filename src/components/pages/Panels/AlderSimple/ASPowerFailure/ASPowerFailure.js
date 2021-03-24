import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// import TGArmDisarmSS from './TGArmDisarmSS'

function ASPanelCommFailure() {
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
                    <iframe src="https://xd.adobe.com/embed/b6da5216-f35e-4c9c-4a59-64934ecae8a4-c0eb/?fullscreen" width="537" height="316" frameborder="0" allowfullscreen></iframe>
                    <h4>Interactive</h4>
                </div>
                <div className="panel-steps-divider">
                </div>

                <ol className="panel-steps">
                    <li>Make sure the panel is plugged in to an outlet.</li>
                    <li>If the panel is plugged in, unplug it and plug in something else into the same outlet it was plugged in (a lamp, phone charge, etc.) to make sure the outlet works.</li>
                    <li>Check the back of the panel. Verify the power cord is plugged in securely in the back of the panel.</li>
                    <li>Disconnect the power cable from the panel, then disconnect the battery from the panel, while the power cable is disconnected. Then reconnect the power cable while the battery is still disconnected. When the panel powers on, reconnect the battery.</li>
                    <li>If the above troubleshooting doesn’t work, special request a new power cord.</li>
                </ol>
            </div>
        </animated.div>
    )
}

export default ASPanelCommFailure
