import 'react-native-gesture-handler'
import {  createDrawerNavigator } from "@react-navigation/drawer";
import Homes from "./Homes";
import ActivityView from "./ActivityView";
import Profile from "./Profile";
import CustomDrawer from './CustomDrawer';
import Tabs from './Tabs';

//not used
const Drawers=()=>{
    const Drawer=createDrawerNavigator()
    return(
       <Drawer.Navigator 
                        screenOptions={{headerShown:false}}
                        DrawerContent={(props)=><CustomDrawer {...props}/>}
                        >
                        
          <Drawer.Screen name='Home' component={Tabs}/>
          <Drawer.Screen name='activity' component={ActivityView} />
          <Drawer.Screen name='profile' component={Profile} />
       </Drawer.Navigator>
    )
}
export default Drawers

// drawerContent={(props)=><CustomDrawer {...props}/>}