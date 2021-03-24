import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function TGAddUserCodes() {
    // this animates whole component
    const props = useSpring({
        from: { opacity: 0, transform: "translateX(-50%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(50%)" },
    })
    // const [mode, setMode] = useState(true)


    return (
        <animated.div className="panel-container" style={props}>
            <h1>Add User Codes</h1>
            <div className="panel-wrapper">

                <div>
                    <h4>Interactive</h4>
                    <iframe width="512" height="402" src="https://xd.adobe.com/embed/b258dd1a-ea8d-4e73-6266-499e4f36df7f-c469/" frameborder="0" allowfullscreen="1"></iframe>
                </div>

                <div className="panel-steps-divider">
                </div>
                <ol className="panel-steps">
                    <li>Press the Home button (Arrow Pointing Up) on the panel.</li>
                    <li>Press "Security".</li>
                    <li>Press"menu".</li>
                    <li>Press "Toolbox".</li>
                    <li>Press "user management" in the top-left corner.</li>
                    <li>Scroll down and select "Add User" from the list with the number of the user you are adding.
                    <ul className="list-indent">
                            <li>The Duress code is User 8.</li>
                        </ul>
                    </li>
                    <li>Type in the code you want to add and press "ok".</li>
                    <li>Re-Type in the code for confirmation and press "ok".</li>
                    <li>It will then ask you to select when you want the system to recognize the new user code. Always, Never, or By Schedule.</li>
                    <li>Press the Home button (Arrow Pointing Up) to return to the home screen.</li>
                </ol>
            </div>
        </animated.div>
    )

}

export default TGAddUserCodes
