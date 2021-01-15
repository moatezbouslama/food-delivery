import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Animated } from 'react-native'
import {icons, COLORS, SIZES, FONT} from '../constants'
import { HeaderRestaurant, FoodInfo, CreateOrder } from './components'

const Restaurant = (props) => {
    const scrollX = new Animated.Value(0);

    const [restaurant, setrestaurant] = useState(null)
    const [currentLocation, setCurrentLocation] = useState(null)
    const [orderItems, setorderItems] = useState([])
    useEffect(() => {
        let {item, currentLocation} = props.route.params;

        setrestaurant(item),
        setCurrentLocation(currentLocation)
    }, [])

    const editOrder = (action, menuId, price) => {
        let orderList = orderItems.slice()
        
        let item = orderList.filter(menu => menu.menuId == menuId)
        if(action =="+"){            
            if(item.length > 0 ){
                let newQuantity = item[0].quantity +1
                item[0].quantity = newQuantity
                item[0].total = item[0].quantity * price
            }
            else {
                const newItem = {
                    menuId : menuId,
                    quantity : 1,
                    price : price,
                    total : price
                }
                orderList.push(newItem)
            }
            setorderItems(orderList)
        }
        else {
            if(item.length > 0 ){
                if(item[0].quantity > 0){
                let newQuantity = item[0].quantity -1
                item[0].quantity = newQuantity
                item[0].total = item[0].quantity * price
                }
                else {
                    console.log("its already 0 idiot")
                }
            }
            setorderItems(orderList)
        }
    }

    const getOrderQuantity = (menuId) =>{
        let orderItem = orderItems.filter(menu => menu.menuId == menuId)
        if(orderItem.length > 0 )
            return orderItem[0].quantity
        return 0
    }

    const getBasketItemCount = () =>{
        let itemCount = orderItems.reduce((accumulator,currentValue)=> accumulator +(currentValue.quantity || 0),0)
        return itemCount
    }

    const sumOrder = () =>{
        let total = orderItems.reduce((accumulator,currentValue)=> accumulator +(currentValue.total || 0),0)
        return total.toFixed(2)
    }

    return (
        <SafeAreaView
            style={style.container}
        >
            <HeaderRestaurant 
                restaurant={restaurant}
                
                {...props}
            />
            <FoodInfo 
                restaurant={restaurant}
                scrollX={scrollX}
                getOrderQuantity={getOrderQuantity}
                editOrder={editOrder}

            />
            <CreateOrder
                restaurant={restaurant}
                scrollX={scrollX}
                getBasketItemCount={getBasketItemCount}
                sumOrder={sumOrder}
                currentLocation={currentLocation}
                {...props}
            />
            

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Restaurant
