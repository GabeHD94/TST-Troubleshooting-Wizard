import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ASPanel from '../../../../../pictures/AS-Panel.png';
// import TGArmDisarmSS from './TGArmDisarmSS'

function ASPanelCommFailure() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (

        <div className="alder-simple-container">
            {/* {mode ? */}
                <div className='alder-simple-body'>
                    <animated.div style={props}>
                    <div className="alder-simple-headers">
                        <h1>Power Communications Failure</h1>
                        <h3 className="alder-simple-mode">Overview</h3>
                    </div>
                        <img className="alder-simple-panelpic" src={ASPanel} alt="TGPanel" />
                        <div className="TG">
                        </div>

                        <ol className="alder-simple-steps">
                            <li>Run a Cellular Communication test from the panel.
                    <ul className="list-indent">
                                    <li>'Settings > System > Test System > Cellular Communication Test.</li>
                                </ul>
                            </li>
                            <li>Some environmental factors may affect the panels signal. Ask the customer if:
                    <ul className="list-indent">
                                    <li>They have a metal roof or house.</li>
                                    <li>They have thick or concrete walls.</li>
                                    <li>AT&T Cell Coverage in their area is bad. Confirm with the coverage map. https://www.att.com/maps/wireless-coverage.html</li>
                                    <li>They have any other environmental issues.</li>
                                    <li>They may need to move the panel to the exterior walls of a home or by windows to test the signal.</li>
                                </ul>
                            </li>
                            <li>Reset the panel and run another Cellular Communication Test
                    <ul className="list-indent">
                                    <li>Hold both the home and phone button down for 10 seconds and type in the 4-digit panel code.</li>
                                    <li>Then Run cell test Settings>System>Test System>Cellular Communication Test.</li>
                                </ul>
                            </li>
                            <li>If step 3 fails Reset the Gateway and Run another cell test.
                    <ul className="list-indent">
                                    <li>Go to the equipment tab on Pando</li>
                                    <li>Confirm the Interactive ID with the customer</li>
                                    <li>Interactive ID can be found in panel settings>system>system info</li>
                                    <li>Enter the Interactive ID under "Serial #" in the equipment tab</li>
                                    <li>Reset the panel and run another cell test-and-bypass-sensors</li>
                                </ul>
                            </li>
                            
                        </ol>
                        {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                    </animated.div>
                </div>
                {/* : <TGArmDisarmSS />} */}
                
        </div>
    )
}

export default ASPanelCommFailure
