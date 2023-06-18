import React from 'react'
import { Image, TouchableOpacity, View,Text, ScrollView, Pressable } from 'react-native'

const Footer=()=>{
     return(
        <View style={{backgroundColor:'azure',flexDirection:'row',height:55,justifyContent:'space-around',alignItems:'center'}}>
             <TouchableOpacity>
                <Image source={require('../assets/headericon/home.png')} style={{height:35 ,width:35}}/>
             </TouchableOpacity>
             <TouchableOpacity>
               <Image source={require('../assets/headericon/notification.png')} style={{height:35,width:35}}/>
             </TouchableOpacity>
             <TouchableOpacity>
                <Image source={require('../assets/headericon/clock.png')} style={{height:35 ,width:35}}/>
             </TouchableOpacity>
             <TouchableOpacity>
                <Image source={require('../assets/headericon/settings.png')} style={{height:35 ,width:35}}/>
             </TouchableOpacity>
        </View>
     )
}
export default Footer

