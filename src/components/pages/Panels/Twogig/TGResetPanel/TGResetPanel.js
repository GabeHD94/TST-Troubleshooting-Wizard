import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function TGResetPanel() {
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
                        <h1>Reset Panel</h1>
                        <h3 className="tg-mode">Overview</h3>
                    </div>
                    <iframe width="412" height="302" src="https://xd.adobe.com/embed/b258dd1a-ea8d-4e73-6266-499e4f36df7f-c469/" frameborder="0" allowfullscreen="1"></iframe>


                        <ol className="tg-steps">
                            <li>Press the Home button (Arrow Pointing Up) on the panel.</li>
                            <li>Press the bottom-right icon. It will say either "2GIG" or "Alder".</li>
                            <li>Enter the code 9044. Other codes: 1561, 7233, 9574.</li>
                            <li>Press "System Configuration" in the top-left corner.</li>
                            <li>Press "end" in the bottom-right corner.</li>
                            <li>Press "exit" in the bottom-right corner.</li>
                            <li>The panel will reset. When it comes back on, it will say "Sytem Disarmed, Ready to Arm".</li>
                        </ol>
                        {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                    </animated.div>
                </div>
                {/* // : <TGArmDisarmSS />} */}
                
        </div>
    )

}

export default TGResetPanel
