import React from 'react'
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
import '../../PanelSidebar.css'

function TwogigSidebar() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })


    return (
        <animated.div style={props}>
            <div className='sidebar-wrapper'>
                <ul className='bu-wrapper'>
                    <h1>2GIG Panel</h1>
                    <h2>Basic Usage</h2>
                    <Link to='/2gig/arm-disarm' className='bars' >
                        <li>
                            Arm/Disarm
                    </li>
                    </Link>

                    <Link to='/2gig/trouble-beeps' className='bars' >
                        <li>
                            Trouble Beeps
                    </li>
                    </Link>

                    <Link to='/2gig/emergency-buttons' className='bars' >
                        <li>
                            Emergency Buttons
                    </li>
                    </Link>
                    <h2>Toolbox</h2>
                    <Link to='/2gig/add-user-codes' className='bars' >
                        <li>
                            Add User Codes
                    </li>
                    </Link>
                    <Link to='/2gig/change-remove-user-codes' className='bars' >
                        <li>
                            Change/Remove User Code
                    </li>
                    </Link>
                    <Link to='/2gig/brightness' className='bars' >
                        <li>
                            Brightness
                    </li>
                    </Link>
                    <Link to='/2gig/backlight-timeout' className='bars' >
                        <li>
                            Backlight Timeout
                    </li>
                    </Link>
                    <Link to='/2gig/clean-screen' className='bars' >
                        <li>
                            Clean Screen
                    </li>
                    </Link>
                    <Link to='/2gig/calibrate-screen' className='bars' >
                        <li>
                            Calibrate Touch Screen
                    </li>
                    </Link>
                    <Link to='/2gig/date-settings' className='bars' >
                        <li>
                            Date Settings
                    </li>
                    </Link>
                    <Link to='/2gig/time-settings' className='bars' >
                        <li>
                            Time Settings
                    </li>
                    </Link>
                    <Link to='/2gig/volume' className='bars' >
                        <li>
                            Volume
                    </li>
                    </Link>
                    <Link to='/2gig/chime-setup' className='bars' >
                        <li>
                            Chime Setup
                    </li>
                    </Link>
                    <Link to='/2gig/system-history' className='bars' >
                        <li>
                            System History
                    </li>
                    </Link>
                    <Link to='/2gig/system-info' className='bars' >
                        <li>
                            System Info
                    </li>
                    </Link>
                    <Link to='/2gig/cell-test' className='bars' >
                        <li>
                            Cell Test
                    </li>
                    </Link>
                    <Link to='/2gig/reset-panel' className='bars' >
                        <li>
                            Reset Panel
                    </li>
                    </Link>
                    <h2>Panel Issues</h2>
                    <Link to='/2gig/panel-com-faliure' className='bars' >
                        <li>
                            Panel Communication Issue
                    </li>
                    </Link>
                    <Link to='/2gig/power-failure' className='bars' >
                        <li>
                            Power Faliure
                    </li>
                    </Link>
                    <Link to='/2gig/panel-lowbatt' className='bars' >
                        <li>
                            Panel Low Battery
                    </li>
                    </Link>
                    <h2>Other</h2>
                    <Link to='/2gig/programming-questions' className='bars' >
                        <li>
                            Programming Questions
                    </li>
                    </Link>
                    <h2>Manuals</h2>
                    <Link to='/2gig/user-guide' className='bars' >
                        <li>
                            2GIG User Guide
                    </li>
                    </Link>
                    <Link to='/2gig/installer-guide' className='bars' >
                        <li>
                            Installer Guide
                    </li>
                    </Link>
                    <Link to='/2gig/specification-sheet' className='bars' >

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
