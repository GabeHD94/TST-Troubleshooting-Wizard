import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TGPanel from '../../../../../pictures/2GIG-Panel.png';


function TGPanelComFailure() {
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
                        <h1>Panel Communication Failure</h1>
                        <h3 className="tg-mode">Overview</h3>
                    </div>
                    <img className="tg-panelpic" src={TGPanel} alt="TGPanel" />
                    <div className="TG">
                    </div>

                    <ol className="tg-steps">
                        <li>Panel Communication Failure
                    <ul className="list-indent">
                                <li>Run a cell test. If the cell test fails, continue to step 2.</li>
                                <li>Reset the panel and run another cell test. If the cell test fails, continue to step 3.</li>
                                <li>Change Q91 and run another cell test:
                    <ul className="list-indent">
                                        <li>Securenet: Change Q91 from 4 to 1, reset panel, and then change Q91 back to 4.</li>
                                        <li>Alarm.com: Change Q91 from 1 to 4, reset panel, and then change Q91 back to 1.</li>
                                    </ul>
                                </li>
                                <li>Reset the gateway.
                    <ul className="list-indent">
                                        <li>Delete the gateway from SecureNet and then add it back in.</li>
                                    </ul>
                                </li>
                                <li>Verify that the correct cell chip is registered.</li>
                            </ul>

                        </li>
                        <li>"Please Wait" Error:</li>

                        <li>Panel Communication Failure
                    <ul className="list-indent">
                                <li>Completely power down the panel.</li>
                                <li>Change Q91 to 1 and then back to 4.</li>
                                <li>Save changes; the panel will begin to reboot. This should successfully remove the "Please Wait" error.</li>
                            </ul>
                        </li>

                        <li>"Idle (NO OTASP)" Error:</li>
                    </ol>
                    {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                </animated.div>
            </div>
            {/* // : <TGArmDisarmSS />} */}

        </div>
    )

}

export default TGPanelComFailure
