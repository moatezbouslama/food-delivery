import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image  } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../constants'


const RestaurantList = ({navigation, getCategoryNameById, shadow, restaurants, currentLocation }) => {

    const renderItem = ({item}) => (
        <TouchableOpacity
            style={{
                marginBottom : SIZES.padding * 2 
            }}
            onPress={()=>navigation.navigate("Restaurant",{item, currentLocation})}
        >
            <View style={{marginBottom : SIZES.padding}}>
                <View>
                    <Image
                        source={item.photo}
                        resizeMode='cover'
                        style={{
                            width : "100%",
                            height : 200,
                            borderRadius : SIZES.radius}}
                    />
                </View>
                <View
                    style={{
                        position : 'absolute',
                        bottom:0,
                        height:50,
                        width: SIZES.width *0.35,
                        backgroundColor: COLORS.white,
                        borderTopRightRadius: SIZES.radius,
                        borderBottomLeftRadius : SIZES.radius,
                        alignItems : "center",
                        justifyContent : "center",
                        ...shadow
                    }}
                >
                    <Text style={{...FONTS.h4}} > {item.duration} </Text>
                </View>
            </View>
            {/* Restaurant info */}
            <Text style={{ ...FONTS.body2}} > {item.name} </Text>
            {/* rating */}
            <View
                style={{
                    marginTop: SIZES.padding,
                    flexDirection : "row"
                }}
            >
                <Image 
                    source={icons.star}
                    style={{
                        height : 20,
                        width : 20,
                        tintColor : COLORS.primary,
                        marginRight : 10,
                    }}
                />
                <Text style={{...FONTS.body3}}> {item.rating} </Text>
                {/* categories */}
                <View
                    style={{
                        flexDirection : "row",
                        marginLeft : 10
                    }}
                >
                    {item.categories.map(categoryId=>(
                        <View
                        style={{flexDirection:'row'}}
                        key={categoryId}
                        >
                            <Text 
                                style={{ ...FONTS.body3}}
                            > 
                                {getCategoryNameById(categoryId)}  
                            </Text>
                            <Text
                                style={{...FONTS.h3,
                                color: COLORS.darkgray,
                                marginHorizontal: 5
                                }}
                            >
                                . 
                            </Text>
                        </View>
                    ))}

                    {/* price */}
                    {[1,2,3].map((priceRating,index)=>(
                        <Text
                            key={index}
                            style={{
                                ...FONTS.body3,
                                color:(priceRating <= item.priceRating)? COLORS.black : COLORS.darkgray
                            }}
                        >
                            $
                        </Text>
                    ) )}
                </View>
            </View>
        </TouchableOpacity>
    )
    

    return (
        <FlatList
            data={restaurants}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{
                paddingHorizontal : SIZES.padding * 2,
                paddingBottom : 30
            }}
        />
    )
}

export default RestaurantList
