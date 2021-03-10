import React from 'react'
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'
import './ASDoorWindowSidebar.css'

function ASDoorWindowSidebar() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })


    return (            
    <animated.div style={props}>
        <div className="dw-sidebar-container">
            <div className='dw-sidebar-wrapper'>
                <h1>Door/Window Sensor</h1>
                <ul className='dw-bars'>
                    <h2>Basic Usage</h2>
                    <Link to='/dw-sensor/add-sensor' className='dw-bars' >
                        <li>
                            Add New Sensor
                        </li>
                    </Link>

                    <Link to='/dw-sensor/trouble-beeps' className='dw-bars' >
                        <li>
                            Low Battery
                        </li>
                    </Link>
                    
                    <Link to='/dw-sensor/emergency-buttons' className='dw-bars' >
                        <li>
                            Tamper
                        </li>
                    </Link>
                    <Link to='/dw-sensor/add-user-codes' className='dw-bars' >
                        <li>
                            Loss of Supervision
                        </li>
                    </Link>
                    <Link to='/dw-sensor/change-remove-user-codes' className='dw-bars' >
                        <li>
                            False Alarm
                        </li>
                    </Link>
                    <Link to='/dw-sensor/brightness-timeout' className='dw-bars' >
                        <li>
                            Test/Bypass
                        </li>
                    </Link>
                    <Link to='/dw-sensor/clean-screen' className='dw-bars' >  
                        <li>
                            Battery Type
                        </li>
                    </Link>   
                </ul>
                &nbsp;
            </div>
        </div>
        </animated.div>
    )
}

export default ASDoorWindowSidebar