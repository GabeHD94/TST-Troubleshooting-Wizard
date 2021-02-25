import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TGPanel from '../../../../../pictures/2GIG-Panel.png';

function TGEmergencyButtons() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (

        <div className="tg-container">
            {/* {mode ? */}
            <div className='tg-body'>
                <animated.div style={props}>
                    <div className="tg-headers">
                        <h1>Emergency Buttons</h1>
                        <h3 className="tg-mode">Overview</h3>
                    </div>
                    <img className="tg-panelpic" src={TGPanel} alt="TGPanel" />
                    <div className="TG">
                    </div>

                    <ol className="tg-steps">
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
                    {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                </animated.div>
            </div>
            {/* // : <TGArmDisarmSS />} */}

        </div>
    )

}

export default TGEmergencyButtons
