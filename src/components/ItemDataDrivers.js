import React from 'react'
import { View,Text,StyleSheet, Pressable } from 'react-native'
import { Entypo , AntDesign,Ionicons } from "@expo/vector-icons";

const ItemDataDrivers = ({item,showDetailsServices}) => {

    const {id, driver, vehicles, placa, status, total } = item;

  return (
    <Pressable onPress={()=>showDetailsServices(id)} style={styles.root}>
     
        <View style={styles.iconStatus}>
            {status === "Pagado"&&  <AntDesign name="checkcircleo" size={24} color="green" />}
            {status === "Anulado"&&  <AntDesign name="closecircleo" size={24} color="red" />}
            {status === "Rodando"&&  <Entypo name="cycle" size={24} color="#01135B" />}
            {status === "Pendiente"&&  <Entypo name="back-in-time" size={24} color="#01135B" />}
            {status === "Por pagar"&&  <Ionicons name="ellipsis-horizontal-circle-sharp" size={30} color="#E0D609" />}
        </View>
        
        <View>
            <View style={styles.cell}>
                <Text style={styles.cellLeft}>conductor</Text>
                <Text style={styles.cellRight}>{driver}</Text>
            </View>
            <View style={styles.cell}>
                <Text style={styles.cellLeft}>ID</Text>
                <Text style={styles.cellRight}>{id}</Text>
            </View>
        </View>

        <View style={styles.statusCost}>
            <Text>{total}</Text>
            <Text>{status}</Text>
        </View>

    </Pressable>
  )
}

const styles = StyleSheet.create({
    root: {
      width: "100%",
      flexDirection:"row",
      justifyContent:"center",
      marginVertical:10
  
    },

    iconStatus:{
        width:"10%",
        alignItems:"center",
        justifyContent:"center"
    },
    
    cell: {
      flexDirection: "row",  
      paddingHorizontal: 15,
      width:"60%",
      gap:15
    },
    cellLeft: {
      fontFamily: "roboto-condensed",
      color: "#8C8C8C",
    },
    cellRight: {
      color: "#01135B",
      fontFamily: "roboto-condensed",
    },
    statusCost:{
        alignItems:"flex-end",
        width:"21%",
      
    }

  });

export default ItemDataDrivers