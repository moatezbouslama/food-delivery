import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, icons, SIZES, images, FONTS } from '../../constants'

const HeaderHome = (currentLocation) =>{

    return(   
        <View style={{flexDirection : 'row', height: 50}} >
            <TouchableOpacity
                style={{
                    width : 50,
                    paddingLeft : SIZES.padding *2,
                    justifyContent : 'center'
                }}
            >
                <Image 
                    source={icons.nearby}
                    resizeMode='contain'
                    style={{
                        width: 30,
                        height : 30
                    }}
                />
            </TouchableOpacity>
    
            <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                <View
                    style={{
                        width: "70%",
                        height: "100%",
                        backgroundColor : COLORS.lightGray3,
                        alignItems : 'center',
                        justifyContent : 'center',
                        borderRadius : SIZES.radius
                    }}
                >
                    <Text style={{fontSize:21}} > {currentLocation.currentLocation.streetName} </Text>
                </View>        
            </View>
            <TouchableOpacity
                style={{
                    width : 50,
                    paddingRight : SIZES.padding *2,
                    justifyContent: 'center'
                }}
            >
                <Image 
                    source={icons.basket}
                    resizeMode='contain'
                    style={{
                        width:30,
                        height : 30
                    }}
                />
    
            </TouchableOpacity>
        </View>
    )
}



export default HeaderHome
