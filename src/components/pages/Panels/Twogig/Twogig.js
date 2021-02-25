import React from 'react'
import TwogigSidebar from './TwogigSidebar/TwogigSidebar';
import TGArmDisarm from './TGArmDisarm/TGArmDisarm'
import TGTroubleBeeps from './TGTroubleBeeps/TGTroubleBeeps'
import TGEmergencyButtons from './TGEmergencyButtons/TGEmergencybuttons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Twogig.css'

function Twogig() {

    
    return (
        <div className="twogig-wrapper">
            <Router>
            <TwogigSidebar />
                <Switch>
                    <Route path='/2gig/arm-disarm' component={TGArmDisarm}/>
                    <Route path='/2gig/trouble-beeps' component={TGTroubleBeeps}/>
                    <Route path='/2gig/emergency-buttons' component={TGEmergencyButtons}/>
                    <p className="tg-placeholder">2GIG Panel</p>
                </Switch>

            </Router>
        </div> 

    )
}

export default Twogig