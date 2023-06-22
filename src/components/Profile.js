import React from 'react'
import { Image, TouchableOpacity, View,Text, ScrollView, Pressable } from 'react-native'
import Footer from './Footer'

const Profile=({navigation})=>{
   
     return(
        <ScrollView style={{ backgroundColor:'white',flex:1}}>
      
            
                <TouchableOpacity style={{zIndex:1,top:10,left:5,justifyContent:'center',alignItems:'center',borderRadius:70}}>
                     <Image source={require('../assets/kingfisher.jpg')} style={{ height:125,width:125,top:8,borderRadius:65,borderWidth:4,borderColor:'white'}}/>
                </TouchableOpacity>
                
                <View style={{backgroundColor:'lavender',height:265, margin:15,marginBottom:0,marginTop:-35 ,borderRadius:5}}>
                   <View style={{marginTop:65}}>

                        <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'black'}}>Nimusoft</Text>

                        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:35}}>
                                    <Text style={{ fontSize:16,fontWeight:'bold'}}>Part Time</Text>
                                    <Text style={{ fontSize:16,fontWeight:'bold'}}>Ul/UX Designer</Text>
                                    <Text style={{ fontSize:16,fontWeight:'bold'}}>Joined 2021</Text>
                        </View>

                        <View style={{backgroundColor:'slategray',height:60,margin:15,marginTop:35,borderRadius:10,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../assets/profile/star-16.png')} style={{ height:30,width:30}}/>
                                <Text style={{ fontSize:20,fontWeight:'bold',marginLeft:6 ,color:'white'}}>20.345pt</Text>
                            </View>
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                               <Text style={{ fontSize:15,fontWeight:'bold' ,marginRight:6,color:'white'}}>Exchange</Text>
                               <Image  source={require('../assets/arrowicon.png')} style={{ height:15,width:15,top:1}}/>
                            </TouchableOpacity>
                            
                        </View>

                   </View>
                </View>

                <View style={{backgroundColor:'lavender',borderColor:'grey',height:85,borderRadius:5,margin:15,flexDirection:'row',justifyContent:'space-around'}}>
                   <View style={{margin:15,alignItems:'center',}}> 
                     <Text style={{ fontSize:15,color:'black'}}>Time Off</Text>
                     <Text style={{ fontSize:20,fontWeight:'bold',marginLeft:6 ,color:'black',marginTop:5}}>02</Text>
                   </View>
                   <View  style={{margin:15 ,alignItems:'center',flexDirection:'row'}}>
                      <View style={{backgroundColor:'black' ,height:30,width:1,marginRight:30}}></View>
                      <View style={{alignItems:'center',}}>
                        <Text style={{ fontSize:15,color:'black'}}>Attendance</Text>
                        <Text style={{ fontSize:20,fontWeight:'bold',marginLeft:6 ,color:'black',marginTop:5}}>31</Text>
                      </View>
                   </View>
                   <View style={{margin:15,alignItems:'center',flexDirection:'row'}}>
                      <View style={{backgroundColor:'black' ,height:30,width:1,marginRight:30}}></View>
                      <View  style={{alignItems:'center',}}>
                        <Text style={{ fontSize:15 ,color:'black'}}>Overtime</Text>
                        <Text style={{ fontSize:20,fontWeight:'bold',marginLeft:6 ,color:'black',marginTop:5}}>12</Text>
                      </View>
                    
                   </View>
                </View>


                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',backgroundColor:'white',height:55,borderColor:'lightgrey',borderWidth:1,borderRadius:3,margin:15,marginTop:0,padding:10,paddingLeft:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}> 
                        <Image source={require('../assets/profile/payslip.png')} style={{ height:30,width:30}}/>
                        <Text  style={{ fontSize:18,color:'black',fontWeight:'bold',marginLeft:15}}>My Payslip</Text>
                    </View>
                    <Image  source={require('../assets/right-arrow.png')} style={{ height:10,width:10,top:1 ,marginLeft:190}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',backgroundColor:'white',borderColor:'lightgrey',height:55,borderRadius:3,margin:15,marginTop:0,borderWidth:1,padding:10,paddingLeft:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}> 
                        <Image source={require('../assets/profile/refund.png')} style={{ height:30,width:30}}/>
                        <Text  style={{ fontSize:18,color:'black',fontWeight:'bold',marginLeft:15}}>Reimbursment</Text>
                    </View>
                    <Image  source={require('../assets/right-arrow.png')} style={{ height:10,width:10,top:1, marginLeft:160}}/>
                </TouchableOpacity>
                
            


           

            
            {/* <View >
                <Footer navigation={navigation}/>
            </View> */}
        
        </ScrollView> 
     )
}
export default Profile