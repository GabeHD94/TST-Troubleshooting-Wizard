import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// import TGArmDisarmSS from './TGArmDisarmSS'

function ASSystemHistory() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (

        <animated.div className="panel-container" style={props}>
            <h1>System History</h1>
            <div className="panel-wrapper">
                <div>
                    <iframe src="https://xd.adobe.com/embed/b6da5216-f35e-4c9c-4a59-64934ecae8a4-c0eb/?fullscreen" width="537" height="316" frameborder="0" allowfullscreen></iframe>
                    <h4>Interactive</h4>
                </div>
                <div className="panel-steps-divider">
                </div>
                <ol className="panel-steps">
                    <li>Press the Home button.</li>
                    <li>Press the envelope icon at the top of the screen.</li>
                    <li>The top of the list will display "Audible alerts for currect trouble conditions" and a toggle switch.
                    <ul className="list-indent">
                            <li>This will always be at the top of the first history screen. Turn off to disable audible alerts for low battery, tamper, and other alerts.</li>
                        </ul>
                    </li>
                    <li>Press the "x" icon to the right of a message to delete it.</li>
                    <li>Press "Next Page" to view the next page of system history.</li>
                    <li>Press the Home button to return to the home screen.</li>
                </ol>
            </div>
        </animated.div>
    )
}

export default ASSystemHistory
