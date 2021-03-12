import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function TGTroubleBeeps() {
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
                        <h1>Trouble Beeps</h1>
                        <h3 className="tg-mode">Overview</h3>
                    </div>
                    <iframe width="412" height="302" src="https://xd.adobe.com/embed/b258dd1a-ea8d-4e73-6266-499e4f36df7f-c469/" frameborder="0" allowfullscreen="1"></iframe>


                        <ol className="tg-steps">
                            <li>Press the Home button (the arrow pointing up) on the panel.</li>
                            <li>Press "Security".</li>
                            <li>Press the yellow box with the white triangle to the right of menu.
                    <ul className="list-indent">
                                    <li>The red alarm button to the right of status will display if the customer has recently had an alarm.</li>
                                    <li>The blue message icon in the bottom-right corner will display if the customer has a message (for example, a weather alert.)</li>
                                </ul>
                            </li>
                            <li>Press "ok" in the bottom right corner.</li>
                            <li>The alerts have been acknowledged and the beeping will stop.</li>
                        </ol>
                        {/* <h2 className="tg-ss-mode" onClick={() => setMode(!mode)}>Step-by-Step Mode</h2> */}
                    </animated.div>
                </div>
                {/* // : <TGArmDisarmSS />} */}
                
        </div>
    )

}

export default TGTroubleBeeps
