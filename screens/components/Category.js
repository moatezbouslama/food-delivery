import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
import { categoryData } from '../../Data/CategoryData'

const Category = ({onSelectCategory, selectedCategory, shadow}) => {
    
    const RenderItem = ({item}) =>{
        return(
            <TouchableOpacity
                style={{
                    padding: SIZES.padding,
                    paddingBottom: SIZES.padding *2,
                    backgroundColor : (selectedCategory?.id ==item.id)? COLORS.primary : COLORS.white ,
                    borderRadius : SIZES.radius,
                    alignItems : 'center',
                    justifyContent : 'center',
                    marginRight : SIZES.padding,
                    ...shadow
                }}
                onPress={()=>onSelectCategory(item)}
            >
                <View
                    style={{
                        width: 50,
                        height:50,
                        borderRadius:25,
                        alignItems: "center",
                        justifyContent : "center",
                        backgroundColor : (selectedCategory?.id ==item.id)? COLORS.white : COLORS.lightGray
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30
                        }}
                    />
                </View>

                <Text 
                    style={{
                        marginTop : SIZES.padding,
                        color: (selectedCategory?.id ==item.id)? COLORS.white : COLORS.black,
                        ...FONTS.body5
                    }}
                >
                    {item.name}
                </Text>        
            </TouchableOpacity>
        )
    }


    return (
        <View
            style={{ padding: SIZES.padding *2 }}
        >
            <Text style={{ ...FONTS.h1 }} >Main</Text>
            <Text style={{ fontSize: 20 }} >Category</Text>
            
            <FlatList
                data={categoryData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={RenderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{paddingVertical : SIZES.padding *2}}
            />
        </View>
    )
}



export default Category
