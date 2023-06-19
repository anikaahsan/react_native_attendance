import 'react-native-gesture-handler'
import { createDrawerNavigator } from "@react-navigation/drawer";
import Homes from "./Homes";
import ActivityView from "./ActivityView";
import Profile from "./Profile";

const Drawer=()=>{
    const Drawer=createDrawerNavigator()
    return(
       <Drawer.Navigator initialRouteName="home">
          <Drawer.Screen name='home' component={Homes}/>
          <Drawer.Screen name='activity' component={ActivityView} />
            <Drawer.Screen name='profile' component={Profile} />
       </Drawer.Navigator>
    )
}
export default Drawer