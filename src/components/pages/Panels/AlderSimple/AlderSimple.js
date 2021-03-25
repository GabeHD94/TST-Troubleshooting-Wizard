import React from 'react'
import AlderSimpleSidebar from '../AlderSimple/AlderSimpleSidebar/AlderSimpleSidebar'
import ASArmDisarm from './ASArmDisarm/ASArmDisarm'
import ASEmergencyButtons from './ASEmergencyButtons/ASEmergencyButtons'
import ASAddUserCodes from './ASAddUserCodes/ASAddUserCodes'
import ASChangeRemoveUser from './ASChangeRemoveUser/ASChangeRemoveUser'
import ASCleanScreen from './ASCleanScreen/ASCleanScreen'
import ASBrightness from './ASBrightness/ASBrightness'
import ASVolume from './ASVolume/ASVolume'
import ASChime from './ASChime/ASChime'
import ASSystemHistory from './ASSystemHistory/ASSystemHistory'
import ASSystemInfo from './ASSystemInfo/ASSystemInfo'
import ASCellTest from './ASCellTest/ASCellTest'
import ASResetPanel from './ASResetPanel/ASResetPanel'
import ASPanelCommFailure from './ASPanelCommFailure/ASPanelCommFailure'
import ASPowerFailure from './ASPowerFailure/ASPowerFailure'
import ASPanelLowBatt from './ASPanelLowBatt/ASPanelLowBatt'
import '../Panels.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function AlderSimple() {
    return (
        <div className="alder-simple-wrapper">
             <Router>
            <AlderSimpleSidebar />
                <Switch>

                    <Route path='/alder-simple/arm-disarm' component={ASArmDisarm}/>
                    {/* <Route path='/alder-simple/trouble-beeps' component={TGTroubleBeeps}/> */}
                    <Route path='/alder-simple/emergency-buttons' component={ASEmergencyButtons}/>
                    <Route path='/alder-simple/add-user-codes' component={ASAddUserCodes}/>
                    <Route path='/alder-simple/change-remove-user-codes' component={ASChangeRemoveUser}/>
                    <Route path='/alder-simple/brightness-timeout' component={ASBrightness}/>
                    <Route path='/alder-simple/clean-screen' component={ASCleanScreen}/>
                    <Route path='/alder-simple/volume' component={ASVolume}/>
                    <Route path='/alder-simple/chime-setup' component={ASChime}/>
                    <Route path='/alder-simple/system-history' component={ASSystemHistory}/>
                    <Route path='/alder-simple/system-info' component={ASSystemInfo}/>
                    <Route path='/alder-simple/cell-test' component={ASCellTest}/>
                    <Route path='/alder-simple/reset-panel' component={ASResetPanel}/>
                    <Route path='/alder-simple/panel-com-faliure' component={ASPanelCommFailure}/>
                    <Route path='/alder-simple/power-failure' component={ASPowerFailure}/>
                    <Route path='/alder-simple/panel-lowbatt' component={ASPanelLowBatt}/>
                    <p>Alder Simple Panel</p>
                </Switch>

            </Router>
        </div>
    )
}

export default AlderSimple
