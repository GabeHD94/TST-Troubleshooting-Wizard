import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function TGEmergencyButtons() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (


        <animated.div className="panel-container" style={props}>
            <h1>Emergency Buttons</h1>
            <div className="panel-wrapper">

                <div>
                    <h4>Interactive</h4>
                    <iframe width="512" height="402" src="https://xd.adobe.com/embed/b258dd1a-ea8d-4e73-6266-499e4f36df7f-c469/" frameborder="0" allowfullscreen="1"></iframe>
                </div>

                <div className="panel-steps-divider">
                </div>

                <ol className="panel-steps">
                    <li>Press the Emergency button ("+") on the panel.</li>
                    <li>Press and hold "panic", "fire", or "emergency" for 2 seconds to activate the alarm.</li>
                    <li>Panic:
                     <ul className="list-indent">
                            <li>The Panic (or police) button sends an immediate panic report to the Central Station. During installation, the installer either set the system to sound the siren when the button is pressed, or to not sound the siren, but to trigger a silent alarm.</li>
                        </ul>
                    </li>
                    <li>Fire:
                     <ul className="list-indent">
                            <li>The Fire button sends an immediate fire report to the Central Station. The Control Panel sounds the fire horn when the button is pressed.</li>
                        </ul>
                    </li>
                    <li>Emergency:
                     <ul className="list-indent">
                            <li>The Emergency button sends an immediate report to the Central Station. The Control Panel sounds the siren when the emergency button is pressed.</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </animated.div>
    )

}

export default TGEmergencyButtons
