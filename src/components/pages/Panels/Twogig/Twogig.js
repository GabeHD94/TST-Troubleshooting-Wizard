import React from 'react'
import TwogigSidebar from './TwogigSidebar/TwogigSidebar';
import TGArmDisarm from './TGArmDisarm/TGArmDisarm'
import TGTroubleBeeps from './TGTroubleBeeps/TGTroubleBeeps'
import TGEmergencyButtons from './TGEmergencyButtons/TGEmergencybuttons'
import TGAddUserCodes from './TGAddUserCodes/TGAddUserCodes'
import TGChangeRemoveUser from './TGChangeRemoveUser/TGChangeRemoveUser'
import TGBrightness from './TGBrightness/TGBrightness'
import TGBacklight from './TGBackLight/TGBacklight'
import TGCleanScreen from './TGCleanScreen/TGCleanScreen'
import TGCalibrateScreen from './TGCalibrateScreen/TGCalibrateScreen'
import TGDateSettings from './TGDateSettings/TGDateSettings'
import TGTimeSettings from './TGTimeSettings/TGTimeSettings'
import TGVolume from './TGVolume/TGVolume'
import TGChimeSetup from './TGChimeSetup/TGChimeSetup'
import TGSystemHistory from './TGSystemHistory/TGSystemHistory'
import TGSystenInfo from './TGSystemInfo/TGSystemInfo'
import TGCellTest from './TGCellTest/TGCellTest'
import TGResetPanel from './TGResetPanel/TGResetPanel'
import TGPanelComFaliure from './TGPanelComFailure/TGPanelComFailure'
import TGPowerFaliure from './TGPowerFailure/TGPowerFailure'
import TGPanelLowBatt from './TGPanelLowBatt/TGPanelLowBatt'
import TGProgrammingQ from './TGProgrammingQ/TGProgammingQ'


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
                    <Route path='/2gig/add-user-codes' component={TGAddUserCodes}/>
                    <Route path='/2gig/change-remove-user-codes' component={TGChangeRemoveUser}/>
                    <Route path='/2gig/brightness' component={TGBrightness}/>
                    <Route path='/2gig/backlight-timeout' component={TGBacklight}/>
                    <Route path='/2gig/clean-screen' component={TGCleanScreen}/>
                    <Route path='/2gig/calibrate-screen' component={TGCalibrateScreen}/>
                    <Route path='/2gig/date-settings' component={TGDateSettings}/>
                    <Route path='/2gig/time-settings' component={TGTimeSettings}/>
                    <Route path='/2gig/volume' component={TGVolume}/>
                    <Route path='/2gig/chime-setup' component={TGChimeSetup}/>
                    <Route path='/2gig/system-history' component={TGSystemHistory}/>
                    <Route path='/2gig/system-info' component={TGSystenInfo}/>
                    <Route path='/2gig/cell-test' component={TGCellTest}/>
                    <Route path='/2gig/reset-panel' component={TGResetPanel}/>
 
                    <Route path='/2gig/panel-com-faliure' component={TGPanelComFaliure}/>
                    <Route path='/2gig/power-failure' component={TGPowerFaliure}/>
                    <Route path='/2gig/panel-lowbatt' component={TGPanelLowBatt}/>
                    <Route path='/2gig/programming-questions' component={TGProgrammingQ}/>

                    <p className="tg-placeholder">2GIG Panel</p>
                </Switch>

            </Router>
        </div> 

    )
}

export default Twogig
