import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function TGProgrammingQ() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (

        <div className="panel-container">
                <div className='panel-wrapper'>
                    <animated.div style={props}>
                    <div className="tg-headers">
                        <h1>Programming Question</h1>
                    </div>

                    </animated.div>
                </div>
                
        </div>
    )

}

export default TGProgrammingQ
