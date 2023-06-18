import React from 'react'
import { View,ScrollView, Text, Image, TouchableOpacity } from 'react-native'

const ActivityBox=()=>{
      return(
        <View style={{ marginBottom:20,margin:15}}>

            <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:10}}>
            
                <View style={{backgroundColor:'white' ,height:120,width:186}}>
                    <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
                        <Image source={require('../assets/activityicon/logout.png')} style={{ height:35,width:35}}/>
                        <Text style={{ fontSize:18,fontWeight:'bold',marginLeft:5}}>Check In</Text>
                    </View>
                    <Text  style={{ fontSize:18,fontWeight:'bold',color:'black',marginLeft:10,marginBottom:3}}>08:30am</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,alignItems:'center',top:-10}}>
                        <Text style={{ fontSize:15,fontWeight:'bold'}}>On time</Text>
                        <Text style={{ fontSize:15,fontWeight:'bold',color:'green'}}>+150pt</Text>
                    </View>
                </View>
            
                <View style={{ backgroundColor:'white',height:120,width:186}}>
                    <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
                        <Image  source={require('../assets/activityicon/workaholism.png')} style={{ height:35,width:35}}/>
                        <Text style={{ fontSize:18,fontWeight:'bold',marginLeft:5}}>Check Out</Text>
                    </View>
                    <Text style={{ fontSize:18,fontWeight:'bold',color:'black',marginLeft:10,marginBottom:3}}>05:10pm</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,alignItems:'center',top:-10}}>
                        <Text style={{ fontSize:15,fontWeight:'bold'}}>On time</Text>
                        <Text style={{ fontSize:15,fontWeight:'bold',color:'green'}}>+100 pt</Text>
                    </View>
                </View>
            
            </View>
            
            <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
            
                <View style={{ backgroundColor:'white',height:120,width:186}}>
                    <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
                        <Image source={require('../assets/activityicon/overtime.png')} style={{ height:40,width:40}}/>
                        <Text style={{ fontSize:17,fontWeight:'bold',marginLeft:5}}>Start Overtime</Text>
                    </View>
                    <Text  style={{ fontSize:18,fontWeight:'bold',color:'black',marginLeft:10,marginBottom:3}}>06:01pm</Text>
                    <Text numberOfLines={1} style={{ fontSize:15,fontWeight:'bold',margin:10,top:-10}}>Project revison from..</Text>
                </View>
            
                <View style={{backgroundColor:'white',height:120,width:186}}>
                    <View style={{flexDirection:'row',alignItems:'center',margin:10 ,marginBottom:8}}>
                        <Image source={require('../assets/activityicon/time-is-money.png')} style={{ height:40,width:40}}/>
                        <Text style={{ fontSize:17,fontWeight:'bold',marginLeft:5}}>Finish Overtime</Text>
                    </View>
                    <Text style={{ fontSize:18,fontWeight:'bold',color:'black',marginLeft:10,marginBottom:3}}>11:10pm</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,top:-10,alignItems:'center'}}>
                        <Text style={{ fontSize:15,fontWeight:'bold'}}>5h 00m</Text>
                        <Text  style={{ fontSize:15,fontWeight:'bold',color:'green'}}>+$120.00</Text>
                    </View>
                </View>
            
            </View>
        
        </View> 
        
      )
}
export default ActivityBox





















