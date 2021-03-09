import React  from 'react';
import { useSpring, animated } from 'react-spring';
import ASPanel from '../../../../../pictures/AS-Panel.png';
// import TGArmDisarmSS from './TGArmDisarmSS'

function DWAddSensor() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (

        <div className="alder-door-window-container">
            {/* {mode ? */}
                <div className='alder-door-window-body'>
                    <animated.div style={props}>
                    <div className="alder-door-window-headers">
                        <h1>Add Sensor</h1>
                        <h3 className="alder-door-window-mode">Overview</h3>
                    </div>
                        <img className="alder-simple-panelpic" src={ASPanel} alt="TGPanel" />

                        <ol className="alder-door-window-steps">
                            <li>Press the Home button.</li>
                            <li>Press "Settings" in the top-right corner.</li>
                            <li>Enter the current Master Code.</li>
                            <li>Press "Sensors".</li>
                            <li>Press "Door" of "Window"</li>
                            <li>Press "+ Add New Sensor"
                    <ul className="list-indent">
                                    <li>You will be prompted to trigger the sensor to have it be recognized by the panel</li>
                                </ul>
                            </li>
                            <li>Once it is triggered successfully, hit 'Continue'.</li>
                            <li>Name the Sensor</li>
                            <li>Install the Sensor where you want it, Then press 'Next'</li>
                            <li>If done, press 'Done adding Doors' or 'Done adding Windows'</li>
                            <li>If you need to add more, press 'Add More Doors' or 'Add More Windows'</li>
                            <li>Press the physical 'Home' button to be taken back to the Home Screen.</li>

                           
                        </ol>
                        {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                    </animated.div>
                </div>
                {/* : <TGArmDisarmSS />} */}
                
        </div>
    )
}

export default DWAddSensor
