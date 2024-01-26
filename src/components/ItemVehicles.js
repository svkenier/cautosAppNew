import React, { useEffect } from 'react'
import { View,Text,StyleSheet } from 'react-native'

const ItemVehicles = ({item,index,handleSize,size,active}) => {
    const {vehicles,icon,price}=item

   

  return (
    <View style={styles.cardVehicles}>
        <View style={index === 1 ? styles.iconSelected: styles.icon}>
            {icon}
        </View>
        <Text>{vehicles}</Text>
        <Text>${price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   cardVehicles: {justifyContent:"center",alignItems:"center" }
   ,icon:{color:"#888"},
   iconSelected:{
    color:'red',
   }

})


export default ItemVehicles