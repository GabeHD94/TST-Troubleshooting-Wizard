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

        <animated.div className="panel-container" style={props}>
            <h1>Panel Low Battery</h1>
            <div className="panel-wrapper">
                <div>
                    <h4>Interactive</h4>
                    <iframe width="512" height="402" src="https://xd.adobe.com/embed/b258dd1a-ea8d-4e73-6266-499e4f36df7f-c469/" frameborder="0" allowfullscreen="1"></iframe>


                </div>
                <div className="panel-steps-divider">
                </div>
                <ol className="panel-steps">
                    <li>Check the top right corner of the screen on the panel. There will be an icon of a plug. Verify there is not a red X on the icon.</li>
                    <li>Ask the customer how long their panel has said "Low Battery".
                    <ul className="list-indent">
                            <li>If it has been 2 days or less, let them know it will take a few days to fully recharge the panel.</li>
                            <li>If it has been 3 days or more, send a hard reset.</li>
                        </ul>
                    </li>
                    <li>Check the back of the panel. Verify that the battery is plugged in.</li>
                </ol>
            </div>
        </animated.div>
    )

}

export default TGPanelLowBatt
