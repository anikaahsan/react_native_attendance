import { TouchableOpacity,View ,Text,Image} from 'react-native'

const ProfileHeaderRight=()=>{
     return(
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:15,marginRight:15,marginTop:5,color:'black',fontWeight:'bold'}}>LogOut</Text>
            <Image source={require('./logout.png')} resizeMode='cover' style={{height:25,width:25}}/>
        </TouchableOpacity>
     )
}
export default ProfileHeaderRight