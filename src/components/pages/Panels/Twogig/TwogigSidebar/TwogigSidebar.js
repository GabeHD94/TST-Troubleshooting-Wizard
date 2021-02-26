import React from 'react'
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'
import './TwogigSidebar.css'

function TwogigSidebar() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })


    return (            
    <animated.div style={props}>
        <div className='twogig-sidebar-wrapper'>
            <h1>2GIG Panel</h1>
            <ul className='bu-wrapper'>
                <h2>Basic Usage</h2>
                <Link to='/2gig/arm-disarm' className='tg-bars' >
                    <li>
                        Arm/Disarm
                    </li>
                </Link>

                <Link to='/2gig/trouble-beeps' className='tg-bars' >
                    <li>
                        Trouble Beeps   
                    </li>
                </Link>
                
                <Link to='/2gig/emergency-buttons' className='tg-bars' >
                    <li>
                        Emergency Buttons
                    </li>
                </Link>
                <h2>Toolbox</h2>
                <Link to='/2gig/add-user-codes' className='tg-bars' >
                    <li>
                        Add User Codes
                    </li>
                </Link>
                <Link to='/2gig/change-remove-user-codes' className='tg-bars' >
                    <li>
                        Change/Remove User Code
                    </li>
                </Link>
                <Link to='/2gig/brightness' className='tg-bars' >
                    <li>
                        Brightness
                    </li>
                </Link>
                <Link to='/2gig/backlight-timeout' className='tg-bars' >
                    <li>
                        Backlight Timeout
                    </li>
                </Link>
                <Link to='/2gig/clean-screen' className='tg-bars' >
                    <li>
                        Clean Screen
                    </li>
                </Link>
                <Link to='/2gig/calibrate-screen' className='tg-bars' >
                    <li>
                        Calibrate Touch Screen
                    </li>
                </Link>
                <Link to='/2gig/date-settings' className='tg-bars' >
                    <li>
                        Date Settings
                    </li>
                </Link>
                <Link to='/2gig/time-settings' className='tg-bars' >
                    <li>
                        Time Settings
                    </li>
                </Link>
                <Link to='/2gig/volume' className='tg-bars' >
                    <li>
                        Volume
                    </li>
                </Link>
                <Link to='/2gig/chime-setup' className='tg-bars' >
                    <li>
                        Chime Setup
                    </li>
                </Link>
                <Link to='/2gig/system-history' className='tg-bars' >
                    <li>
                        System History
                    </li>
                </Link>
                <Link to='/2gig/system-info' className='tg-bars' >
                    <li>
                        System Info
                    </li>
                </Link>
                <Link to='/2gig/cell-test' className='tg-bars' >
                    <li>
                        Cell Test
                    </li>
                </Link>
                <Link to='/2gig/reset-panel' className='tg-bars' >
                    <li>
                        Reset Panel
                    </li>
                </Link>
                <h2>Panel Issues</h2>
                <Link to='/2gig/panel-com-faliure' className='tg-bars' >
                    <li>
                        Panel Communication Issue
                    </li>
                </Link>
                <Link to='/2gig/power-failure' className='tg-bars' >
                    <li>
                        Power Faliure
                    </li>
                </Link>
                <Link to='/2gig/panel-lowbatt' className='tg-bars' >
                    <li>
                        Panel Low Battery
                    </li>
                </Link>
                <h2>Other</h2>
                <Link to='/2gig/programming-questions' className='tg-bars' >
                    <li>
                        Programming Questions
                    </li>
                </Link>
                <h2>Manuals</h2>
                <Link to='/2gig/user-guide' className='tg-bars' >
                    <li>
                        2GIG User Guide
                    </li>
                </Link>
                <Link to='/2gig/installer-guide' className='tg-bars' >
                    <li>
                        Installer Guide
                    </li>
                </Link>
                <Link to='/2gig/specification-sheet' className='tg-bars' >

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

export default TwogigSidebar
