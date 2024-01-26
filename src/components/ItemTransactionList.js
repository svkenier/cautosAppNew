import React from 'react'
import { Text, View, StyleSheet,Pressable } from 'react-native'
import { MaterialIcons, AntDesign } from "@expo/vector-icons";



const ItemTransactionList = ({item,showDetailsTransaction}) => {

    const {dateDeposit,bank,typeOperation,reference,amountDeposited,acredictedAmount,status} = item

  return (
    <Pressable onPress={()=>showDetailsTransaction(reference)} style={styles.root}>
    
    <View style={styles.iconStatus}>
            {status === "Aprobado"&&  <AntDesign name="checkcircleo" size={24} color="green" />}
            {status === "Rechazada"&&  <AntDesign name="closecircleo" size={24} color="red" />}
    </View>

    <View style={styles.containerCell}>
    <View style={styles.cell}>
    <Text style={styles.cellLeft}>Carga a:</Text>
    <Text style={styles.cellRight}>{bank}</Text>
    </View>
    <View style={styles.cell}>
    <Text style={styles.cellLeft}>#Ref:</Text>
    <Text style={styles.cellRight}>{reference}</Text>
    </View>
    </View>

    <View style={styles.statusCost}>
    <Text>{amountDeposited} USD</Text>
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
    marginVertical:15
    


  },

  iconStatus:{
      width:"10%",
      alignItems:"center",
      justifyContent:"center",
  },
  
  containerCell:{
    width:"55%"
  },

  cell: {
    flexDirection: "row",  
    paddingHorizontal: 15,
    width:"100%",
    alignItems:"center"
  
  },
  cellLeft: {
    fontFamily: "roboto-condensed",
    color: "#8C8C8C",
  },
  cellRight: {
    color: "#01135B",
    fontFamily: "roboto-condensed",
    fontSize:12,
  },
  statusCost:{
      alignItems:"flex-end",
      width:"25%",
    
  }

});

export default ItemTransactionList