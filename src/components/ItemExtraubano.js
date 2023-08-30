import React from 'react'
import { View,Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ItemExtraubano = ({item}) => {

    const {lugar,distancia,precio} = item

  return (
    <View style={{ width:"90%",flexDirection:"row",}}>
       <View style={{justifyContent:"center", alignItems:"center",width:"15%"}}>
        <MaterialCommunityIcons name="car" size={24} color="#01135B" />
       </View>
        <View style={{width:"85%",flexDirection:"row",paddingVertical:10, justifyContent:"space-between"}}>
           
           <View style={{justifyContent:"space-between"}}>
            <View style={{flexDirection:"row",gap:15}}>
                <Text style={{color:"#8c8c8c"}}>Lugar:</Text>
                <Text style={{color:"#01135B"}}>{lugar}</Text>
            </View>
            <View style={{flexDirection:"row",gap:15}}>
                <Text style={{color:"#8c8c8c"}}>Distancia:</Text>
                <Text style={{color:"#01135B"}}>
                    {distancia} km
             </Text>
            </View>
           </View>
           <View style={{justifyContent:"center"}}>
        <Text style={{color:"#01135B"}}>${precio}</Text>
           </View>
        </View>
    </View>
  )
}

export default ItemExtraubano