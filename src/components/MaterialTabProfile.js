import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Homes from "./Homes";
import ActivityView from "./ActivityView";
import Profile from "./Profile";


const MaterialTabProfile=()=>{
    const Tab=createMaterialTopTabNavigator()
    return(
        <Tab.Navigator initialRouteName="profiless">
            <Tab.Screen name='homess' component={Homes} options={{headerShown:false,title:'Home'}} />
            <Tab.Screen name='activityss' component={ActivityView} options={{headerShown:false,title:'Activity'}}/>
            <Tab.Screen name='profiless' component={Profile} options={{headerShown:false ,title:'Profile'}}/>
        </Tab.Navigator>
    )
}
export default MaterialTabProfile