import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Homes from "./Homes";
import ActivityView from "./ActivityView";
import Profile from "./Profile";


const MaterialTabHome=()=>{
    const Tab=createMaterialTopTabNavigator()
    return(
        <Tab.Navigator initialRouteName="homee">
            <Tab.Screen name='homee' component={Homes} options={{headerShown:false,title:'Home'}} />
            <Tab.Screen name='activitye' component={ActivityView} options={{headerShown:false,title:'Activity'}}/>
            <Tab.Screen name='profilee' component={Profile} options={{headerShown:false,title:'Profile'}}/>
        </Tab.Navigator>
    )
}
export default MaterialTabHome