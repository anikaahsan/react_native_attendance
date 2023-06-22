import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {  createDrawerNavigator } from "@react-navigation/drawer";

import TabHome from './src/components/TabHome'
import TabActivity from './src/components/TabActivity'
import TabProfile from './src/components/TabProfile'
import Tabs from './src/components/Tabs';
import LeaveNavigation from './src/components/LeaveNavigation'
import TabLeave from './src/components/TabLeave'



const App=()=>{
      const Stack=createNativeStackNavigator()
      const Tab=createBottomTabNavigator()
      const Drawer=createDrawerNavigator()

      return(
  
            <NavigationContainer>
                  <Drawer.Navigator initialRouteName='Menu' screenOptions={{headerShown:false,
                                                            animation:'fade_from_bottom'}}>
                        <Drawer.Screen 
                              name='Menu'
                              component={Tabs}
                              options={{headerShown:false}}/>
                        
                        <Drawer.Screen name='Home' component={TabHome} options={{headerShown:false}}/>
                        <Drawer.Screen name='Activity Details' component={TabActivity} options={{headerShown:false}}/>
                        <Drawer.Screen name='My Profile' component={TabProfile} options={{headerShown:false}}/>
                        <Drawer.Screen name='leave' component={TabLeave} options={{headerShown:false,drawerItemStyle:{display:'none'}}}/>


                  </Drawer.Navigator>
            </NavigationContainer>
   )
}
export default App

  {/* <Stack.Screen 
               name='activity' 
               component={ActivityView}
               options={{headerShown:false}}/>      
         <Stack.Screen 
              name='profile'
              component={Profile}
              options={{ headerStyle:{backgroundColor:'white'},
                        headerShadowVisible:false,
                        headerRight:()=>( <ProfileHeaderRight/>
                         
                         ) }}/>   */}

                           {/* <Stack.Screen name='materialtab' component={MaterialTopTab}  options={{headerShown:false}} />      */}



                       