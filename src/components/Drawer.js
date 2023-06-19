import { createDrawerNavigator } from "@react-navigation/drawer";
import Homes from "./Homes";


const Drawer=()=>{
    const Drawer=createDrawerNavigator()
    return(
       <Drawer.Navigator initialRouteName="home">
          <Drawer.Screen name='home' component={Homes}/>
       </Drawer.Navigator>
    )
}
export default Drawer