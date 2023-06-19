import React from 'react'
import { Image, TouchableOpacity, View,Text, ScrollView, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Footer=({navigation })=>{
   
     return(
        <View style={{backgroundColor:'azure',flexDirection:'row',height:55,justifyContent:'space-around',alignItems:'center'}}>
             <TouchableOpacity onPress={()=>navigation.navigate('home')}>
                <Image source={require('../assets/headericon/home.png')} style={{height:25 ,width:25}}/>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.navigate('drawer')}>
               <Image source={require('../assets/headericon/notification.png')} style={{height:25,width:25}}/>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.navigate('tab')}>
                <Image source={require('../assets/headericon/clock.png')} style={{height:25 ,width:25}}/>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.navigate('materialtab')}>
                <Image source={require('../assets/headericon/settings.png')} style={{height:25 ,width:25}}/>
             </TouchableOpacity>
        </View>
     )
}
export default Footer

