import React from 'react'
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'
import '../../SensorSidebar.css'

function MotionSidebar() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })


    return (            
    <animated.div style={props}>
        <div className='dw-sidebar-wrapper'>
            <ul className='dw-bu-wrapper'>
            <h1>Motion Detector</h1>
                <h2>Troubleshooting</h2>
                <Link to='/motion/add-sensor' className='dw-bars' >
                    <li>
                        Add Sensor
                    </li>
                </Link>
                <Link to='/motion/low-battery' className='dw-bars' >
                    <li>
                        Low Battery
                    </li>
                </Link>
                <Link to='/motion/tamper' className='dw-bars' >
                    <li>
                        Tamper
                    </li>
                </Link>
                <Link to='/motion/loss-supervision' className='dw-bars' >
                    <li>
                        Loss of supervision
                    </li>
                </Link>
                <Link to='/motion/false-alarm' className='dw-bars' >
                    <li>
                        False Alarm
                    </li>
                </Link>


                    
            </ul>
            &nbsp;

        </div>
        </animated.div>
    )
}

export default MotionSidebar
