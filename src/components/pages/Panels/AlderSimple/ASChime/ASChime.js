import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// import TGArmDisarmSS from './TGArmDisarmSS'

function ASChime() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (



        <animated.div className="panel-container" style={props}>
            <h1>Chime Setup</h1>
            <div className="panel-wrapper">
                <div>
                    <iframe src="https://xd.adobe.com/embed/b6da5216-f35e-4c9c-4a59-64934ecae8a4-c0eb/?fullscreen" width="537" height="316" frameborder="0" allowfullscreen></iframe>
                    <h4>Interactive</h4>
                </div>
                <div className="panel-steps-divider">
                </div>
                <ol className="panel-steps">
                    <li>Press the Home button.</li>
                    <li>Press "Settings" in the top-right corner.</li>
                    <li>Enter the current Master Code.</li>
                    <li>Press "System".</li>
                    <li>Press "Sounds".</li>
                    <li>Change the chime sounds by using the "On" and "Off" buttons to the right of "Chime Sounds".</li>
                    <li>Change the voice sounds by using the "On" and "Off" buttons to the right of "Voice Sounds".</li>
                </ol>
            </div>
        </animated.div>
    )
}

export default ASChime
