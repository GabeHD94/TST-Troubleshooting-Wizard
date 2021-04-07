import React from 'react'
import { useSpring, animated } from 'react-spring';


function AddASMotionTGPanel() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-15%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(30%)" },
    })
    return (
        <animated.div className="sensor-container" style={props}>
            <h1>Adding Sensor</h1>
            <div className="sensor-wrapper">
                <iframe width="512" height="402" src="https://xd.adobe.com/embed/b258dd1a-ea8d-4e73-6266-499e4f36df7f-c469/" frameborder="0" allowfullscreen="1"></iframe>

                <div className="sensor-steps-divider">
                </div>
                <ol className="sensor-steps">
                    <li>Press the ‘2GIG’ logo in the Bottom Right Corner</li>
                    <li>Enter the Installer Code</li>
                    <li>Press ‘System Configuration’</li>
                    <li>Use the Left and Right Arrows to navigate to an Empty Zone</li>



                    <li>Use the Arrow Keys to program in the following Information:
                    <ul className="list-indent">
                            <li>Sensor Type:
                    <ul className="list-indent">
                                    <li>Interior Follower</li>
                                </ul>
                            </li>


                            <li>Equipment Code:
                    <ul className="list-indent">
                                    <li>0869 (2GIG PIR with Pet Immunity)</li>
                                </ul>
                            </li>

                            <li>Serial Number:
                    <ul className="list-indent">
                                    <li>Enter the 7-Digit TXID </li>
                                    <li>Press ‘Shift’ then ‘Learn’ then trigger the sensor by pressing the Test Button or Tampering the Sensor</li>
                                </ul>
                            </li>

                            <li>Equipment Age:
                    <ul className="list-indent">
                                    <li>New</li>
                                    <li>Existing</li>
                                </ul>
                            </li>

                            <li>Loop:
                    <ul className="list-indent">
                                    <li>1</li>
                                </ul>
                            </li>

                            <li>Dialer Delay:
                    <ul className="list-indent">
                                    <li>Disabled (No Transmission Delay when the Alarm Sirens)</li>
                                    <li>Enabled (Uses the Transmission Delay when the Alarm Sirens)</li>
                                </ul>
                            </li>

                            <li>Voice Descriptor: (Common Codes)
                    <ul className="list-indent">
                                    <li>133 (Living)</li>
                                    <li>078 (Family)</li>
                                    <li>187 (Room)</li>
                                    <li>108 (Hallway)</li>
                                    <li>147 (Motion Detector)</li>
                                </ul>
                            </li>

                            <li>Reports:
                    <ul className="list-indent">
                                    <li>Enabled</li>
                                </ul>
                            </li>

                            <li>Supervised:
                    <ul className="list-indent">
                                    <li>Enabled</li>
                                </ul>
                            </li>
                            <li>Chime:
                    <ul className="list-indent">
                                    <li>Enabled</li>
                                </ul>
                            </li>
                            <li>Press ‘End’</li>
                            <li>Press ‘Exit’ (Make sure ‘Save Changes’ is Checked)</li>



                        </ul>

                    </li>


                    <li>"Idle (NO OTASP)" Error:</li>

                </ol>
            </div>
        </animated.div>
    )
}

export default AddASMotionTGPanel
