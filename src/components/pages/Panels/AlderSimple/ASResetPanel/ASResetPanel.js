import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// import TGArmDisarmSS from './TGArmDisarmSS'

function ASResetPanel() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (
        <animated.div className="panel-container" style={props}>
            <h1>Reset Panel</h1>
            <div className="panel-wrapper">
                <div>
                    <iframe src="https://xd.adobe.com/embed/b6da5216-f35e-4c9c-4a59-64934ecae8a4-c0eb/?fullscreen" width="537" height="316" frameborder="0" allowfullscreen></iframe>
                    <h4>Interactive</h4>
                </div>
                <div className="panel-steps-divider">
                </div>
                <ol className="panel-steps">
                    <li>Press and hold the Home and the Phone button at the same time.</li>
                    <li>When prompted, enter in the master code.</li>
                    <li>The screen will turn blue and the panel will reset.</li>
                </ol>
            </div>
        </animated.div>
    )
}

export default ASResetPanel
