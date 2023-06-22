import React from 'react'
import { View,ScrollView, Text, Image, TouchableOpacity } from 'react-native'



const Homes=({navigation})=>{
    return(
  <ScrollView style={{flex:1,margin:16}} showsVerticalScrollIndicator={false}>    
            <View>
                <View style={{flexDirection:'row'}}>

                    <View style={{backgroundColor:'pink',height:120,width:180,marginRight:10,borderRadius:5}}>
                        <View style={{backgroundColor:'white',height:50 ,width:50,alignItems:'center',borderRadius:50,marginLeft:15,marginTop:10}}>
                            <Image source={require('../assets/user.png')} style={{ height:35,width:35,top:8}}/>
                        </View>    
                        <Text style={{fontSize:15,padding:15,fontWeight:'bold'}}>Attendance management</Text>
                    </View>

                    <View style={{backgroundColor:'#ccffcc',height:200,width:190,borderRadius:5}}>

                        <View style={{backgroundColor:'white',height:55 ,width:55,alignItems:'center',borderRadius:50,marginLeft:15,marginTop:10}}>
                            <Image source={require('../assets/dollar.png')} style={{ height:40,width:40,top:6}}/>
                        </View>
                        
                        
                        <Text style={{fontSize:15,padding:15,fontWeight:'bold',top:-7}} numberOfLines={2}>Employee Cost </Text>
                        <Text style={{fontSize:15,fontWeight:'bold',paddingLeft:15,top:-21}} >Savings</Text>

                        <View style={{flexDirection:'row', alignItems:'flex-end',marginTop:-6,justifyContent:'space-around'}}>
                            <Text>+$10.1k</Text>
                            <View style={{flexDirection:'row',alignItems:'flex-end' }}>
                                <View style={{ backgroundColor:'#00ff00',height:20,width:10,marginRight:3}}></View>
                                <View style={{ backgroundColor:'#00ff00',height:60,width:10,marginRight:3}}></View>
                                <View style={{ backgroundColor:'#00ff00',height:40,width:10,marginRight:3}}></View>
                                <View style={{ backgroundColor:'#00ff00',height:30,width:10,marginRight:3}}></View>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={{flexDirection:'row'}}>
                  
                    <View style={{backgroundColor:'#ccccff',height:200,width:180,marginRight:10,top:-70,borderRadius:5}}>
                   
                        <View style={{backgroundColor:'white',height:55 ,width:55,alignItems:'center',borderRadius:50,marginLeft:15,marginTop:10}}>
                            <Image source={require('../assets/economy.png')} style={{ height:40,width:40,top:6}}/>
                        </View>
                         
                        <Text style={{fontSize:15,padding:15,fontWeight:'bold'}}>Increase Your Workflow</Text>
                        
                        <View style={{flexDirection:'row',alignItems:'flex-end', justifyContent:'space-around',bottom:25}}>
                            <Text>+200%</Text>
                            <View style={{flexDirection:'row',alignItems:'flex-end' }}>
                                <View style={{ backgroundColor:'#9966ff',height:20,width:10,marginRight:3}}></View>
                                <View style={{ backgroundColor:'#9966ff',height:40,width:10,marginRight:3}}></View>
                                <View style={{ backgroundColor:'#9966ff',height:60,width:10,marginRight:3}}></View>
                                <View style={{ backgroundColor:'#9966ff',height:80,width:10,marginRight:3}}></View>
                            </View>
                        </View>
                    </View>

                    <View style={{backgroundColor:'#ccffff',height:120,width:190,marginTop:10,borderRadius:5}}>

                        <View style={{backgroundColor:'white',height:50 ,width:50,alignItems:'center',borderRadius:50,marginLeft:15,marginTop:10}}>
                            <Image source={require('../assets/accuracy.png')} style={{ height:45,width:45,top:1}}/>
                        </View>  
                        <Text style={{fontSize:15,padding:15,fontWeight:'bold'}}>Enhance Data Accuracy</Text>
                    </View>

                </View>

            </View>

           

            <View style={{ marginBottom:30,marginTop:-40}}>
                <Text numberOfLines={2} style={{fontSize:16}}>Help you to improve efficiency,accuracy,engagement and cost savings for employers.</Text>
            </View>

            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('leave')}>
                    <View style={{backgroundColor:'darkslategray',height:50,marginBottom:12,borderRadius:3}}>
                        <Text style={{textAlign:'center',fontSize:20,padding:11,color:'white',fontWeight:'bold'}}>Leave Management</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('activity')}>
                    <View style={{borderWidth:1 ,borderColor:'grey',height:50,borderRadius:3}}>
                        <Text style={{textAlign:'center',fontSize:20,padding:11,color:'darkslategray',fontWeight:'bold'}}>I'm an Employee</Text>
                    </View>
                </TouchableOpacity>
            </View>

        
    </ScrollView>    
)
}
export default Homes