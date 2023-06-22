import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Homes from "./Homes";
import ActivityView from "./ActivityView";
import Profile from "./Profile";


const MaterialTabActivity=()=>{
    const Tab=createMaterialTopTabNavigator()
    return(
        <Tab.Navigator initialRouteName="activityy">
            <Tab.Screen name='homey' component={Homes} options={{headerShown:false,title:'Home'}} />
            <Tab.Screen name='activityy' component={ActivityView} options={{headerShown:false,title:'Activity'}}/>
            <Tab.Screen name='profiley' component={Profile} options={{headerShown:false,title:'Profile'}}/>
        </Tab.Navigator>
    )
}
export default MaterialTabActivity