import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function TGResetPanel() {
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
                    <h4>Interactive</h4>
                    <iframe width="512" height="402" src="https://xd.adobe.com/embed/b258dd1a-ea8d-4e73-6266-499e4f36df7f-c469/" frameborder="0" allowfullscreen="1"></iframe>
                </div>
                <div className="panel-steps-divider">
                </div>
                <ol className="panel-steps">
                    <li>Press the Home button (Arrow Pointing Up) on the panel.</li>
                    <li>Press the bottom-right icon. It will say either "2GIG" or "Alder".</li>
                    <li>Enter the code 9044. Other codes: 1561, 7233, 9574.</li>
                    <li>Press "System Configuration" in the top-left corner.</li>
                    <li>Press "end" in the bottom-right corner.</li>
                    <li>Press "exit" in the bottom-right corner.</li>
                    <li>The panel will reset. When it comes back on, it will say "Sytem Disarmed, Ready to Arm".</li>
                </ol>
            </div>
        </animated.div>
    )

}

export default TGResetPanel
