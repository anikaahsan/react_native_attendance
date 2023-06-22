import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons'
import Homes from "./Homes";
import ActivityView from "./ActivityView";
import Profile from "./Profile";
import MaterialTopTab from "./MaterialTopTab";
import MaterialTabActivity from "./MaterialTabActivity";
import TabLeave from "./TabLeave";

const TabActivity=()=>{
    const Tab=createBottomTabNavigator()
    return(
        <Tab.Navigator initialRouteName="materialtabactivity" screenOptions={({route})=>(
                                                                    {headerShown:false,
                                                                    tabBarShowLabel:false,
                                                                    }
                                                                    )}>
            <Tab.Screen 
                name='materialtabactivity'
                component={MaterialTabActivity}
                options={{headerShown:false,
                        tabBarIcon:()=>(<Icon name='home' size={30} color='black'/>),
                        tabBarActiveBackgroundColor:'lavender'}}/>
            <Tab.Screen 
                name='leaves'
                component={TabLeave}
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
export default TabActivity