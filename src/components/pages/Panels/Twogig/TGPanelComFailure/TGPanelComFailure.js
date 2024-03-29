import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';



function TGPanelComFailure() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (

        <animated.div className="panel-container" style={props}>
            <h1>Panel Communication Failure</h1>
            <div className="panel-wrapper">
                <div>
                    <h4>Interactive</h4>
                    <iframe width="512" height="402" src="https://xd.adobe.com/embed/b258dd1a-ea8d-4e73-6266-499e4f36df7f-c469/" frameborder="0" allowfullscreen="1"></iframe>
                </div>
                <div className="panel-steps-divider">
                </div>
                <ol className="panel-steps">
                    <li>Panel Communication Failure
                    <ul className="list-indent">
                            <li>Run a cell test. If the cell test fails, continue to step 2.</li>
                            <li>Reset the panel and run another cell test. If the cell test fails, continue to step 3.</li>
                            <li>Change Q91 and run another cejll test:
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
            </div>
        </animated.div>
    )

}

export default TGPanelComFailure
