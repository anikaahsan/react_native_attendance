import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons'
import Homes from "./Homes";
import ActivityView from "./ActivityView";
import Profile from "./Profile";
import MaterialTopTab from "./MaterialTopTab";
import MaterialTabHome from "./MaterialTabHome";

const TabHome=()=>{
    const Tab=createBottomTabNavigator()
    return(
        <Tab.Navigator initialRouteName="materialtabhome" screenOptions={({route})=>(
                                                                    {headerShown:false,
                                                                    tabBarShowLabel:false,
                                                                    }
                                                                    )}>
            <Tab.Screen 
                name='materialtabhome'
                component={MaterialTabHome}
                options={{headerShown:false,
                        tabBarIcon:()=>(<Icon name='home' size={30} color='black'/>),
                        tabBarActiveBackgroundColor:'lavender'}}/>
            
            <Tab.Screen 
                name='homes' 
                component={Homes}
                options={{headerShown:false,
                        
                            tabBarIcon:({ color,focused,size})=>(<Icon name='notifications' size={30} color='black'/>),
                            tabBarActiveBackgroundColor:'lavender'
                        }}/>    

            <Tab.Screen 
                name='activitys' 
                component={ActivityView}
                options={{headerShown:false,
                        
                            tabBarIcon:({ color,focused,size})=>(<Icon name='time' size={30} color='black'/>),
                            tabBarActiveBackgroundColor:'lavender'
                        }}/>                   
                
                    
            <Tab.Screen 
                name='profiles'
                component={Profile}
                options={{ headerShown:false,
                        
                        tabBarIcon:({ color,focused,size})=>(<Icon name='settings' size={30} color='black'/>),
                        tabBarActiveTintColor:'blue',
                        tabBarActiveBackgroundColor:'lavender'
                            
                            }}/>  
        </Tab.Navigator>
    )
}
export default TabHome