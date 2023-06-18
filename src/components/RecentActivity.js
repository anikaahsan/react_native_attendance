import React from 'react'
import { View,ScrollView, Text, Image, TouchableOpacity } from 'react-native'



const RecentActivity=()=>{
    return(
        <View style={{ margin:10,top:-20,}}>
            <View style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>          
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/activityicon/logout.png')} style={{ height:35,width:35}}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>Check In</Text>
                        <Text style={{fontSize:14,color:'grey'}}>13 June 2023</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>09:15am</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:14,color:'grey'}}>Late* </Text>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'green'}}> +5pt</Text>
                    </View>
                </View>
            </View>

            <View  style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>       
                <View style={{flexDirection:'row'}}>
                    <View  style={{marginRight:10}}>
                        <Image source={require('../assets/activityicon/workaholism.png')} style={{ height:40,width:40}}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>Check Out</Text>
                        <Text style={{fontSize:14,color:'grey'}}>13 June 2023</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>05:02pm</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text>Ontime* </Text>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'green'}}> +100pt</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>     
                <View style={{flexDirection:'row'}}>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/activityicon/overtime.png')} style={{ height:40,width:40}}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>Overtime</Text>
                        <Text style={{fontSize:14,color:'grey'}}>14 June 2023</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>06:01-10:59pm</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text>5h 30m* </Text>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'green'}}> +$120.00</Text>
                    </View>
                </View>
            </View> 

            <View style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>          
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/activityicon/logout.png')} style={{ height:35,width:35}}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>Check In</Text>
                        <Text style={{fontSize:14,color:'grey'}}>13 June 2023</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>09:15am</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:14,color:'grey'}}>Late* </Text>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'green'}}> +5pt</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>          
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/activityicon/logout.png')} style={{ height:35,width:35}}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>Check In</Text>
                        <Text style={{fontSize:14,color:'grey'}}>13 June 2023</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>09:15am</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:14,color:'grey'}}>Late* </Text>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'green'}}> +5pt</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>          
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/activityicon/logout.png')} style={{ height:35,width:35}}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>Check In</Text>
                        <Text style={{fontSize:14,color:'grey'}}>13 June 2023</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>09:15am</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:14,color:'grey'}}>Late* </Text>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'green'}}> +5pt</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>          
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/activityicon/logout.png')} style={{ height:35,width:35}}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>Check In</Text>
                        <Text style={{fontSize:14,color:'grey'}}>13 June 2023</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>09:15am</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:14,color:'grey'}}>Late* </Text>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'green'}}> +5pt</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>          
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/activityicon/logout.png')} style={{ height:35,width:35}}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>Check In</Text>
                        <Text style={{fontSize:14,color:'grey'}}>13 June 2023</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>09:15am</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:14,color:'grey'}}>Late* </Text>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'green'}}> +5pt</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>          
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/activityicon/logout.png')} style={{ height:35,width:35}}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>Check In</Text>
                        <Text style={{fontSize:14,color:'grey'}}>13 June 2023</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>09:15am</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:14,color:'grey'}}>Late* </Text>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'green'}}> +5pt</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>          
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/activityicon/logout.png')} style={{ height:35,width:35}}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>Check In</Text>
                        <Text style={{fontSize:14,color:'grey'}}>13 June 2023</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>09:15am</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:14,color:'grey'}}>Late* </Text>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'green'}}> +5pt</Text>
                    </View>
                </View>
            </View>




          
    </View>              
    )

}    
export default RecentActivity