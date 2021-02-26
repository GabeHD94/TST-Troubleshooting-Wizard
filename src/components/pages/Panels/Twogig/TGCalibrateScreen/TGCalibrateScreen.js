import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TGPanel from '../../../../../pictures/2GIG-Panel.png';

function TGCalibrateScreen() {
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
                        <h1>Calibrate Touch Screen</h1>
                        <h3 className="tg-mode">Overview</h3>
                    </div>
                        <img className="tg-panelpic" src={TGPanel} alt="TGPanel" />
                        <div className="TG">
                        </div>

                        <ol className="tg-steps">
                            <li>Press the Home button (Arrow Pointing Up) on the panel.</li>
                            <li>Press "Security".</li>
                            <li>Press"Menu".</li>
                            <li>Press "Toolbox".</li>
                            <li>Enter the Master Code.</li>
                            <li>Press the right arrow once. You should be on Toolbox (2 of 3).</li>
                            <li>Press "calibrate touch screen".
                            <ul className="list-indent">
                                    <li>Three crosses ("+") will appear on the screen one at a time.</li>
                                    <li>Press the center of the first cross and a new cross will appear.</li>
                                    <li>Continue to press the center of each cross until the panel displays the calibration is complete.</li>
                                    <li>Press "okay" in the bottom-right corner.</li>
                                </ul>
                            </li>
                            <li>Press the Home button to return to the Home Screen.</li>
                        </ol>
                        {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                    </animated.div> 
                </div>
                {/* // : <TGArmDisarmSS />} */}
                
        </div>
    )

}

export default TGCalibrateScreen