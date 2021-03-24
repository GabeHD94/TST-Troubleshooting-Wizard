import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TGPanel from '../../../../../pictures/2GIG-Panel.png';

function TGChimeSetup() {
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
                    <h4>Interactive</h4>
                    <iframe width="512" height="402" src="https://xd.adobe.com/embed/b258dd1a-ea8d-4e73-6266-499e4f36df7f-c469/" frameborder="0" allowfullscreen="1"></iframe>
                </div>

                <div className="panel-steps-divider">
                </div>


                <ol className="panel-steps">
                    <li>Press the Home button (Arrow Pointing Up) on the panel.</li>
                    <li>Press "Security".</li>
                    <li>Press "Menu".
                    <ul className="list-indent">
                            <li>On the screen with "arm", "emergency", and "toolbox", press "chime" and "voice" so that they are both checked to enable the door announcements.</li>
                        </ul>
                    </li>
                    <li>Press "Toolbox".</li>
                    <li>Enter the Master Code.</li>
                    <li>Press "Chime Setup".
                    <ul className="list-indent">
                            <li>Disabled</li>
                            <li>Voice Only</li>
                            <li>Ding-dong or Chime Only</li>
                            <li>Ding-dong or Chime with Voice</li>
                        </ul>
                    </li>
                    <li>Press the Home button to return to the Home Screen.</li>
                </ol>
            </div>
        </animated.div>
    )

}

export default TGChimeSetup
