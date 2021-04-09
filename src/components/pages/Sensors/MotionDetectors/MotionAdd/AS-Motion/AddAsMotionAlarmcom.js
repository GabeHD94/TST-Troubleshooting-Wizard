import React from 'react'
import { useSpring, animated } from 'react-spring';


function AddAsMotionAlarmcom() {
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
                    <li>Open the correct Alarm.com Account</li>
                    <li>Click ‘Equipment’ from the Nav Bar on the left side.</li>
                    <li>Click ‘Sensors’ from the Tabs near the top of the screen.</li>
                    <li>Click ‘Add A Sensor’ from the Sensor Management list near the bottom of the screen.</li>
                    <li>Input the following information:
                <ul className="list-indent">
                            <li>Sensor ID:
                <ul className="list-indent">
                                    <li>Choose the next available zone number. You can use the list at the bottom of the screen to see the current sensors and what zone they are assigned to.</li>
                                </ul>
                            </li>
                            <li>Sensor Type:
                <ul className="list-indent">
                                    <li>Exit / Entry 1 (Uses Entry Delay 1)</li>
                                    <li>Exit / Entry 2 (Uses Entry Delay 2)</li>
                                    <li>Perimeter (No Entry Delay)</li>
                                </ul>
                            </li>
                            <li>Equipment Code:
                <ul className="list-indent">
                                    <li>0862</li>
                                </ul>
                            </li>
                            <li>Serial Number:
                <ul className="list-indent">
                                    <li>Enter the 7-Digit TXID </li>
                                </ul>
                            </li>
                            <li>Equipment Age:
                <ul className="list-indent">
                                    <li>New</li>
                                    <li>Existing</li>
                                </ul>
                            </li>
                            <li>Sensor Loop Number:
                <ul className="list-indent">
                                    <li>1 (Normally Closed Input Detection)</li>
                                    <li>2 (Wireless Magnet Detection)</li>
                                </ul>
                            </li>
                            <li>Dialer Delay:
                <ul className="list-indent">
                                    <li>Disabled (No Transmission Delay when the Alarm Sirens)</li>
                                    <li>Enabled (Uses the Transmission Delay when the Alarm Sirens)</li>
                                </ul>
                            </li>
                            <li>Voice Descriptor:
                <ul className="list-indent">
                                    <li>Select a voice descriptor using the drop-down boxes</li>
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
                            <li>Chime: (Example) 
                <ul className="list-indent">
                                    <li>Voice Only</li>
                                </ul>
                            </li>
                            <li>Click ‘Add Sensor’</li>

                        </ul>
                    </li>
                </ol>
            </div>
        </animated.div>
    )
}

export default AddAsMotionAlarmcom
