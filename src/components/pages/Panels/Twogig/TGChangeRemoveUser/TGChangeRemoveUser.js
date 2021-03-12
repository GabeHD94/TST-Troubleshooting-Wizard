import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';


function TGChangeRemoveUser() {
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
                        <h1>Change/Remove User Codes</h1>
                        <h3 className="tg-mode">Overview</h3>
                    </div>
                    <iframe width="412" height="302" src="https://xd.adobe.com/embed/b258dd1a-ea8d-4e73-6266-499e4f36df7f-c469/" frameborder="0" allowfullscreen="1"></iframe>


                        <ol className="tg-steps">
                            <li>Press the Home button (Arrow Pointing Up) on the panel.</li>
                            <li>Press "Security".</li>
                            <li>Press"Menu".</li>
                            <li>Press "Toolbox".</li>
                            <li>Enter the current Master Code.</li>
                            <li>Press "User Management" in the top-left corner.</li>
                            <li>Select the user code you want to change.</li>
                            <h4>Edit User Code</h4>
                            <li>To edit the code, press "Change Pin" and enter the new code. Then confirm the code by entering it again.</li>
                            <h4>Remvove User Code</h4>
                            <li>To remove the code, press "Delete" in the bottom-right corner.</li>
                            <li>Press the Home button (Arrow Pointing Up) to return to the home screen.</li>
                        </ol>
                        {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                    </animated.div>
                </div>
                {/* // : <TGArmDisarmSS />} */}
                
        </div>
    )

}

export default TGChangeRemoveUser
