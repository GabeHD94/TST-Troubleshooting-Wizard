import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// import TGArmDisarmSS from './TGArmDisarmSS'

function ASChangeRemoveUser() {
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
                        <h1>Change/Remove User Codes</h1>
                        <h3 className="alder-simple-mode">Overview</h3>
                    </div>
                    <iframe src="https://xd.adobe.com/embed/b6da5216-f35e-4c9c-4a59-64934ecae8a4-c0eb/?fullscreen" width="537" height="316" frameborder="0" allowfullscreen></iframe>
                        <h4>Interactive</h4>


                        <ol className="alder-simple-steps">
                            <li>Press the Home button.</li>
                            <li>Press "Settings" in the top-right corner.</li>
                            <li>Enter the current Master Code.</li>
                            <li>Press "User Passcodes".</li>
                            <li>To edit a code, press "Reset" to the right of the code you would like to change.</li>
                            <li>To remove a code, press the "x" icon to the right of the code.</li>
                            <li>Press the Home button to return to the home screen.</li>
                           
                        </ol>
                        {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                    </animated.div>
                </div>
                {/* : <TGArmDisarmSS />} */}
                
        </div>
    )
}

export default ASChangeRemoveUser
