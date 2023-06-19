import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Text,Button} from 'react'

import Homes from './src/components/Homes'
import ActivityView from './src/components/ActivityView'
import Profile from './src/components/Profile'
import ProfileHeaderRight from './src/components/headers/ProfileHeaderRight'

import Tab from './src/components/Tab';
import Drawer from './src/components/Drawer'
import MaterialTopTab from './src/components/MaterialTopTab'







const App=()=>{
 const Stack=createNativeStackNavigator()

   return(
  
   //   <Homes/>
   //   <ActivityView/>
   //   <Profile/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
         <Stack.Screen 
               name='home'
               component={Homes}
               options={{headerShown:false}}/>
         <Stack.Screen 
               name='activity' 
               component={ActivityView}
               options={{headerShown:false}}/>      
         <Stack.Screen 
              name='profile'
              component={Profile}
              options={{ headerStyle:{backgroundColor:'white'},
                        headerShadowVisible:false,
                        headerRight:()=>( <ProfileHeaderRight/>
                         
                         ) }}/>  

          <Stack.Screen name='tab' component={Tab} options={{headerShown:false}}/> 
          <Stack.Screen name='materialtab' component={MaterialTopTab}  options={{headerShown:false}} />
          <Stack.Screen name='drawer' component={Drawer} options={{headerShown:false}}/>               
        

      </Stack.Navigator>   
    </NavigationContainer>
     
    
     
   )
}
export default App