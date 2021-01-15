import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker}  from 'react-native-maps'
import {COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY} from "../constants"

const OrderDelivery = () => {

    const [restaurant, setrestaurant] = useState(initialState)

    const mapfood = () =>{
        return(
            <View style={{flex:1}}>
                <MapView
                    style={{flex : 1}}
                >

                </MapView>
            </View>
        )
    }

    return (
        <View style={{flex : 1}}>
            {mapfood()}
        </View>
    )
}

export default OrderDelivery
