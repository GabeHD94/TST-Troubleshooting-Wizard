import React from 'react'
import AlderSimpleSidebar from '../AlderSimple/AlderSimpleSidebar/AlderSimpleSidebar'
import './AlderSimple.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function AlderSimple() {
    return (
        <div className="alder-simple-wrapper">
             <Router>
            <AlderSimpleSidebar />
                <Switch>

                    {/* <Route path='/alder-simple/arm-disarm' component={TGArmDisarm}/>
                    <Route path='/alder-simple/trouble-beeps' component={TGTroubleBeeps}/>
                    <Route path='/alder-simple/emergency-buttons' component={TGEmergencyButtons}/>
                    <Route path='/alder-simple/add-user-codes' component={TGAddUserCodes}/>
                    <Route path='/alder-simple/change-remove-user-codes' component={TGChangeRemoveUser}/>
                    <Route path='/alder-simple/brightness' component={TGBrightness}/>
                    <Route path='/alder-simple/backlight-timeout' component={TGBacklight}/>
                    <Route path='/alder-simple/clean-screen' component={TGCleanScreen}/>
                    <Route path='/alder-simple/calibrate-screen' component={TGCalibrateScreen}/>
                    <Route path='/alder-simple/date-settings' component={TGDateSettings}/>
                    <Route path='/alder-simple/time-settings' component={TGTimeSettings}/>
                    <Route path='/alder-simple/volume' component={TGVolume}/>
                    <Route path='/alder-simple/chime-setup' component={TGChimeSetup}/>
                    <Route path='/alder-simple/system-history' component={TGSystemHistory}/>
                    <Route path='/alder-simple/system-info' component={TGSystenInfo}/>
                    <Route path='/alder-simple/cell-test' component={TGCellTest}/>
                    <Route path='/alder-simple/reset-panel' component={TGResetPanel}/>
 
                    <Route path='/2gig/panel-com-faliure' component={TGPanelComFaliure}/>
                    <Route path='/2gig/power-failure' component={TGPowerFaliure}/>
                    <Route path='/2gig/panel-lowbatt' component={TGPanelLowBatt}/>
                    <Route path='/2gig/programming-questions' component={TGProgrammingQ}/> */}
                    <p>Alder Simple Panel</p>
                </Switch>

            </Router>
        </div>
    )
}

export default AlderSimple
