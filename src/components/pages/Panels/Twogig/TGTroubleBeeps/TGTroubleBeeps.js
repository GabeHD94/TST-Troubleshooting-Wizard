import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function TGTroubleBeeps() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (
        <animated.div className="panel-container" style={props}>
            <h1>Trouble Beeps</h1>
            <div className="panel-wrapper">

                <div>
                    <h4>Interactive</h4>
                    <iframe width="512" height="402" src="https://xd.adobe.com/embed/b258dd1a-ea8d-4e73-6266-499e4f36df7f-c469/" frameborder="0" allowfullscreen="1"></iframe>
                </div>

                <div className="panel-steps-divider">
                </div>

                <ol className="panel-steps">
                    <li>Press the Home button (the arrow pointing up) on the panel.</li>
                    <li>Press "Security".</li>
                    <li>Press the yellow box with the white triangle to the right of menu.
                 <ul className="list-indent">
                            <li>The red alarm button to the right of status will display if the customer has recently had an alarm.</li>
                            <li>The blue message icon in the bottom-right corner will display if the customer has a message (for example, a weather alert.)</li>
                        </ul>
                    </li>
                    <li>Press "ok" in the bottom right corner.</li>
                    <li>The alerts have been acknowledged and the beeping will stop.</li>
                </ol>
            </div>
        </animated.div>
    )

}

export default TGTroubleBeeps
