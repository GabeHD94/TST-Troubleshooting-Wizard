import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TGPanel from '../../../../../pictures/2GIG-Panel.png';

function TGAddUserCodes() {
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
                        <h1>Add User Codes</h1>
                        <h3 className="tg-mode">Overview</h3>
                    </div>
                        <img className="tg-panelpic" src={TGPanel} alt="TGPanel" />
                        <div className="TG">
                        </div>

                        <ol className="tg-steps">
                            <li>Press the Home button (Arrow Pointing Up) on the panel.</li>
                            <li>Press "Security".</li>
                            <li>Press"menu".</li>
                            <li>Press "Toolbox".</li>
                            <li>Press "user management" in the top-left corner.</li>
                            <li>Scroll down and select "Add User" from the list with the number of the user you are adding.
                    <ul className="list-indent">
                                    <li>The Duress code is User 8.</li>
                                </ul>
                            </li>
                            <li>Type in the code you want to add and press "ok".</li>
                            <li>Re-Type in the code for confirmation and press "ok".</li>
                            <li>It will then ask you to select when you want the system to recognize the new user code. Always, Never, or By Schedule.</li>
                            <li>Press the Home button (Arrow Pointing Up) to return to the home screen.</li>
                        </ol>
                        {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                    </animated.div>
                </div>
                {/* // : <TGArmDisarmSS />} */}
                
        </div>
    )

}

export default TGAddUserCodes
