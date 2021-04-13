import React from 'react'
import { useSpring, animated } from 'react-spring';


function AddAsMotionSecureNet() {
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-15%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(30%)" },
    })
    return (

        <animated.div className="sensor-container" style={props}>
            <h1>Adding Sensor(SecureNet)</h1>
            <div className="sensor-wrapper">
                <div>
                    <h4>Interactive</h4>
                    <iframe src="https://xd.adobe.com/embed/b6da5216-f35e-4c9c-4a59-64934ecae8a4-c0eb/?fullscreen" title="aspanel" width="637" height="416" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="sensor-steps-divider">
                </div>

                <ol className="sensor-steps">
                    <li>Open the correct SecureNet Account</li>
                    <li>Expand the ‘Accounts’ Tab from the Nav Bar on the left side</li>
                    <li>Click Add User / Edit
                    <ul className="list-indent">
                            <li>Name
                            <ul className="list-indent">
                                    <li>Name of the User</li>
                                </ul>
                            </li>
                            <li>Relationship
                            <ul className="list-indent">
                                    <li>Not required, but can be used to track the relation to the account holder</li>
                                </ul>
                            </li>

                            <li>Master Checkbox
                            <ul className="list-indent">
                                    <li>Check this for the primary account holder’s user</li>
                                </ul>
                            </li>
                            <li>Locked Checkbox</li>

                            <li>Email
                            <ul className="list-indent">
                                    <li>Used for Email Notifications</li>
                                </ul>
                            </li>

                            <li>Phone #
                            <ul className="list-indent">
                                    <li>Used for Text Notifications</li>
                                </ul>
                            </li>

                            <li>Web Username
                            <ul className="list-indent">
                                    <li>Alder App Username</li>
                                </ul>
                            </li>


                            <li>Web Password
                            <ul className="list-indent">
                                    <li>Alder App Password</li>
                                </ul>
                            </li>

                            <li>User ID
                            <ul className="list-indent">
                                    <li>Choose the next available User ID or choose Master for the primary account holder</li>
                                </ul>
                            </li>

                            <li>Panel Access Code
                            <ul className="list-indent">
                                    <li>Enter a valid Panel Code, refer to [SecureNet View / Edit Panel Codes] to find the valid Panel Codes</li>
                                </ul>
                            </li>
                        </ul>
                        <li>Click ‘Done’</li>
                    </li>
                </ol>
            </div>
        </animated.div>
    )
}


export default AddAsMotionSecureNet
