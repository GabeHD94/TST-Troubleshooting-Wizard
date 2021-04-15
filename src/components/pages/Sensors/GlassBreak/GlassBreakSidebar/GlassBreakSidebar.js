import React from 'react'
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'

function GlassBreakSidebar() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })

    return (

        <animated.div style={props}>
            <div className='tsr-sidebar-wrapper'>
                <ul>
                    <h1>Glass Break</h1>
                    <h2>Troubleshooting</h2>
                    <Link to='/glassbreak/add-sensor' className='sidebar-bars' >
                        <li>
                            Add Sensor
                    </li>
                    </Link>
                    <Link to='/glassbreak/low-battery' className='sidebar-bars' >
                        <li>
                            Low Battery
                    </li>
                    </Link>
                    <Link to='/glassbreak/tamper' className='sidebar-bars' >
                        <li>
                            Tamper
                    </li>
                    </Link>
                    <Link to='/glassbreak/loss-supervision' className='sidebar-bars' >
                        <li>
                            Loss of supervision
                    </li>
                    </Link>
                    <Link to='/glassbreak/false-alarm' className='sidebar-bars' >
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

export default GlassBreakSidebar
