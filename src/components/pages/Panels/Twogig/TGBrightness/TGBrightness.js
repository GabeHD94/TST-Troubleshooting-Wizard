import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';


function TGBrightness() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)

    return (



        <animated.div className="panel-container" style={props}>
            <h1>Brightness</h1>
            <div className="panel-wrapper">

                <div>
                    <h4>Interactive</h4>
                    <iframe width="512" height="402" src="https://xd.adobe.com/embed/b258dd1a-ea8d-4e73-6266-499e4f36df7f-c469/" frameborder="0" allowfullscreen="1"></iframe>
                </div>

                <div className="panel-steps-divider">
                </div>
                <ol className="panel-steps">
                    <li>Press the Home button (Arrow Pointing Up) on the panel.</li>
                    <li>Press "Security".</li>
                    <li>Press"Menu".</li>
                    <li>Press "Toolbox".</li>
                    <li>Enter the Master Code.</li>
                    <li>Press "Brightness / volume".</li>
                    <li>Press the light icon on the left to lower the brightness.</li>
                    <li>Press the light icon on the right to raise the brightness.</li>
                </ol>
            </div>
        </animated.div>
    )

}

export default TGBrightness
