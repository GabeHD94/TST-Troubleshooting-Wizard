import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TGPanel from '../../../../../pictures/2GIG-Panel.png';

function TGCellTest() {
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
                        <h1>Cell Test</h1>
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
                            <li>Use the arrows in the bottom-right corner to navigate to Toolbox (3 of 3).</li>
                            <li>Select "cell phone test".</li>
                            <li>Enter the Master Code.</li>
                            <li>The panel will run a cell phone test.</li>
                        </ol>
                        {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                    </animated.div>
                </div>
                {/* // : <TGArmDisarmSS />} */}
                
        </div>
    )

}

export default TGCellTest
