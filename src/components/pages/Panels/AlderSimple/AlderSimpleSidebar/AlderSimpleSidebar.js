import React from 'react'
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'
import '../../PanelSidebar.css'

function AlderSimpleSidebar() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })


    return (            
    <animated.div style={props}>
        <div className='sidebar-wrapper'>
            <h1>Alder Simple Panel</h1>
            <ul className='bu-wrapper'>
                <h2>Basic Usage</h2>
                <Link to='/alder-simple/arm-disarm' className='bars' >
                    <li>
                        Arm/Disarm
                    </li>
                </Link>

                <Link to='/alder-simple/trouble-beeps' className='bars' >
                    <li>
                        Trouble Beeps   
                    </li>
                </Link>
                
                <Link to='/alder-simple/emergency-buttons' className='bars' >
                    <li>
                        Emergency Buttons
                    </li>
                </Link>
                <h2>Toolbox</h2>
                <Link to='/alder-simple/add-user-codes' className='bars' >
                    <li>
                        Add User Codes
                    </li>
                </Link>
                <Link to='/alder-simple/change-remove-user-codes' className='bars' >
                    <li>
                        Change/Remove User Code
                    </li>
                </Link>
                <Link to='/alder-simple/brightness-timeout' className='bars' >
                    <li>
                        Brightness/Display Timeout
                    </li>
                </Link>
                <Link to='/alder-simple/clean-screen' className='bars' >
                    <li>
                        Clean Screen
                    </li>
                </Link>   
                <Link to='/alder-simple/volume' className='bars' >
                    <li>
                        Volume
                    </li>
                </Link>
                <Link to='/alder-simple/chime-setup' className='bars' >
                    <li>
                        Chime Setup
                    </li>
                </Link>
                <Link to='/alder-simple/system-history' className='bars' >
                    <li>
                        System History
                    </li>
                </Link>
                <Link to='/alder-simple/system-info' className='bars' >
                    <li>
                        System Info
                    </li>
                </Link>
                <Link to='/alder-simple/cell-test' className='bars' >
                    <li>
                        Cell Test
                    </li>
                </Link>
                <Link to='/alder-simple/reset-panel' className='bars' >
                    <li>
                        Reset Panel
                    </li>
                </Link>
                <h2>Panel Issues</h2>
                <Link to='/alder-simple/panel-com-faliure' className='bars' >
                    <li>
                        Panel Communication Issue
                    </li>
                </Link>
                <Link to='/alder-simple/power-failure' className='bars' >
                    <li>
                        Power Faliure
                    </li>
                </Link>
                <Link to='/alder-simple/panel-lowbatt' className='bars' >
                    <li>
                        Panel Low Battery
                    </li>
                </Link>
                <h2>Other</h2>
                <Link to='/alder-simple/programming-questions' className='bars' >
                    <li>
                        Programming Questions
                    </li>
                </Link>
                <h2>Manuals</h2>
                <Link to='/alder-simple/user-guide' className='bars' >
                    <li>
                        2GIG User Guide
                    </li>
                </Link>
                <Link to='/alder-simple/installer-guide' className='bars' >
                    <li>
                        Installer Guide
                    </li>
                </Link>
                <Link to='/alder-simple/specification-sheet' className='bars' >

                    <li>
                        Specification Sheet
                    </li>
                </Link>

                    
            </ul>
            &nbsp;

        </div>
        </animated.div>
    )
}

export default AlderSimpleSidebar
