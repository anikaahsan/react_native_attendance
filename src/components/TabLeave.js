import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons'
import Homes from "./Homes";
import ActivityView from "./ActivityView";
import Profile from "./Profile";
import MaterialTabProfile from "./MaterialTabProfile";
import LeaveNavigation from "./LeaveNavigation";
import MaterialTabHome from "./MaterialTabHome";



const TabLeave=()=>{
    const Tab=createBottomTabNavigator()
    return(
        <Tab.Navigator initialRouteName="leaves" screenOptions={({route})=>(
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
                name='leave'
                component={LeaveNavigation}
                options={{headerShown:false,
                         tabBarItemStyle:{display:'none'},
                        tabBarIcon:()=>(<Icon name='home' size={30} color='black'/>),
                        tabBarActiveBackgroundColor:'lavender'}}/>            
            
            <Tab.Screen 
                name='home' 
                component={Homes}
                options={{headerShown:false,
                        
                            tabBarIcon:({ color,focused,size})=>(<Icon name='notifications' size={30} color='black'/>),
                            tabBarActiveBackgroundColor:'lavender'
                        }}/>    

            <Tab.Screen 
                name='activity' 
                component={Homes}
                options={{headerShown:false,
                        
                            tabBarIcon:({ color,focused,size})=>(<Icon name='time' size={30} color='black'/>),
                            tabBarActiveBackgroundColor:'lavender'
                        }}/>                   
                
                    
            <Tab.Screen 
                name='profile'
                component={Profile}
                options={{ headerShown:false,
                        
                        tabBarIcon:({ color,focused,size})=>(<Icon name='settings' size={30} color='black'/>),
                        tabBarActiveTintColor:'blue',
                        tabBarActiveBackgroundColor:'lavender'
                            
                            }}/>  
        </Tab.Navigator>
    )
}
export default TabLeave