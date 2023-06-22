import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Leave from './leave/component/Leave'
import Approvalstatus from './leave/component/ApprovalStatus'
import RequestLeave from './leave/component/RequestLeave'



const LeaveNavigation=()=>{
    const Stack=createNativeStackNavigator()
    return(
        
            <Stack.Navigator initialRouteName='leave'>
              <Stack.Screen name='leave' component={Leave}/>
              <Stack.Screen name='approvalstatus' component={Approvalstatus}/>
              <Stack.Screen name='requestleave' component={RequestLeave}/>
            </Stack.Navigator>
      
    )
}
export default LeaveNavigation