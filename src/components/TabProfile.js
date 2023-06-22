import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons'
import Homes from "./Homes";
import ActivityView from "./ActivityView";
import Profile from "./Profile";
import MaterialTabProfile from "./MaterialTabProfile";


const TabProfile=()=>{
    const Tab=createBottomTabNavigator()
    return(
        <Tab.Navigator initialRouteName="materialtabprofile" screenOptions={({route})=>(
                                                                    {headerShown:false,
                                                                    tabBarShowLabel:false,
                                                                    }
                                                                    )}>
            <Tab.Screen 
                name='materialtabprofile'
                component={MaterialTabProfile}
                options={{headerShown:false,
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
export default TabProfile