import React from 'react'
import { Image, TouchableOpacity, View,Text, ScrollView, Pressable } from 'react-native'

import RecentActivity from './RecentActivity'
import ActivityBox from './ActivityBox'
import Footer from './Footer'

const ActivityView=()=>{
    return(
    <View style={{ backgroundColor:'whitesmoke'}} >

        <View style={{ flexDirection:'row' ,justifyContent:'space-between',marginBottom:6,margin:15}}>
            <View>
                <Text style={{ fontSize:20,fontWeight:'bold',marginBottom:5}}>Morning,Nimusoft</Text>
                <Text style={{fontSize:15}}>13 June,2023</Text>
            </View>
            <TouchableOpacity >
                <Image source={require('../assets/accuracy.png')} style={{ width:50,height:50}}/>
            </TouchableOpacity>
        </View>
       
       <View>
            <ActivityBox />
            <View style={{ backgroundColor:'white',height:60}}>
                <View style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:15,}}>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:22,color:'black'}}>Recent Activity</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={{fontWeight:'bold',fontSize:15}}>See more</Text>
                    </TouchableOpacity>
                </View>
            </View>
       </View>
          
       
        <ScrollView style={{ backgroundColor:'white',height:190}} showsVerticalScrollIndicator={false}>
               <RecentActivity/>     
        </ScrollView>
        
        <Footer/>
        
    </View>
    )
}
export default ActivityView