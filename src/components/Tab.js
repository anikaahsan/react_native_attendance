import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homes from "./Homes";
import ActivityView from "./ActivityView";
import Profile from "./Profile";

const Tab=()=>{
    const Tab=createBottomTabNavigator()
    return(
        <Tab.Navigator initialRouteName="home">
            <Tab.Screen name='home' component={Homes} options={{headerShown:false,}} />
            <Tab.Screen name='activity' component={ActivityView} options={{headerShown:false}}/>
            <Tab.Screen name='profile' component={Profile} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}
export default Tab