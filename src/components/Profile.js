import React from 'react'
import { Image, TouchableOpacity, View,Text, ScrollView, Pressable } from 'react-native'
import Footer from './Footer'

const Profile=()=>{
     return(
        <View style={{ backgroundColor:'whitesmoke'}}>
            
                <TouchableOpacity style={{backgroundColor:'pink',height:140,width:140,zIndex:1,top:60,left:140,justifyContent:'center',alignItems:'center',borderRadius:70}}>
                     <Image source={require('../assets/user.png')} style={{ height:100,width:100,top:8}}/>
                </TouchableOpacity>
                
                <View style={{backgroundColor:'lavender',height:215, margin:15,marginBottom:0}}>
                   <View style={{marginTop:60}}>

                        <Text style={{textAlign:'center',fontSize:23,fontWeight:'bold',color:'black'}}>Nimusoft</Text>

                        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
                                    <Text style={{ fontSize:15,fontWeight:'bold'}}>Part Time</Text>
                                    <Text style={{ fontSize:15,fontWeight:'bold'}}>Ul/UX Designer</Text>
                                    <Text style={{ fontSize:15,fontWeight:'bold'}}>Joined 2021</Text>
                        </View>

                        <View style={{backgroundColor:'darkslategray',height:55,width:350,margin:15,marginTop:20,borderRadius:10,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../assets/profile/favourites.png')} style={{ height:30,width:30}}/>
                                <Text style={{ fontSize:20,fontWeight:'bold',marginLeft:6 ,color:'white'}}>20.345pt</Text>
                            </View>
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                               <Text style={{ fontSize:15,fontWeight:'bold' ,marginRight:6,color:'white'}}>Exchange</Text>
                               <Image  source={require('../assets/right-arrow.png')} style={{ height:10,width:10,top:1}}/>
                            </TouchableOpacity>
                            
                        </View>

                   </View>
                </View>

                <View style={{backgroundColor:'lavender',borderColor:'grey',height:75,width:375,borderRadius:3,margin:15,flexDirection:'row',justifyContent:'space-around'}}>
                   <View>
                     <Text>Time Off</Text>
                     <Text>02</Text>
                   </View>
                   <View>
                      <Text>Attendance</Text>
                      <Text>31</Text>
                   </View>
                   <View>
                      <Text>Overtime</Text>
                      <Text>12</Text>
                   </View>
                </View>


                <View style={{backgroundColor:'white',height:55,width:375,borderColor:'lightgrey',borderWidth:1,borderRadius:3,margin:15,marginTop:0}}>
                    <View>
                        <Text>My Payslip</Text>
                        <Image/>
                    </View>
                    <Image/>
                </View>
                <View style={{backgroundColor:'white',borderColor:'lightgrey',height:55,width:375,borderRadius:3,margin:15,marginTop:0,borderWidth:1,}}>
                    <View>
                        <Text>Reimbursment</Text>
                        <Image/>
                    </View>
                    <Image/>
                </View>
                
            


           

            
            <View >
                <Footer/>
            </View>
        </View>
     )
}
export default Profile