import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TGPanel from '../../../../../pictures/2GIG-Panel.png';

function TGCleanScreen() {
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
                        <h1>Clean Screen</h1>
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
                            <li>Press "Clean Screen".
                            <ul className="list-indent">
                                    <li>The Panel will turn off touch input for 30 seconds so that you can clean the screen without accidentally pushing any buttons on the screen.</li>
                                </ul>
                            </li>
                            <li>Press the Home button to return to the home screen.</li>
                        </ol>
                        {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                    </animated.div> 
                </div>
                {/* // : <TGArmDisarmSS />} */}
                
        </div>
    )

}

export default TGCleanScreen