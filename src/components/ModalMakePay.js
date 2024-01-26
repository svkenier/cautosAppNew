import { Pressable } from '@react-native-material/core'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {View ,Text ,StyleSheet} from "react-native"

const ModalMakePay = ({handleModalPay}) => {
  return (
    <Pressable style={styles.root} onPress={()=>handleModalPay()}>
        <View style={styles.modal}>
            <View style={styles.icon}>
            <FontAwesome name="dollar" size={54} color="#fff" />
            </View>
            <Text style={styles.text}>¿Desea pagar el servicio con su saldo en Cautos Banco?</Text>
            <View style={styles.conatainerButtons}>
                <Pressable onPress={()=>handleModalPay()}>
                <Text>NO</Text>
                </Pressable>
                <Pressable>
                <Text>SI</Text>
                </Pressable>
            </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    root: {
      alignItems: "center",
      width: "100%",
      flex: 1,
    backgroundColor:"#0008",
    justifyContent:"center",
    alignItems:"center"
    },

    modal:{
        backgroundColor:"#fff",
        borderRadius:20,
        width:"85%",
        height:"30%",
        padding:15,
        gap:10
    },
    icon:{
        backgroundColor:"#01135B",
        borderRadius:50,
        padding:10,
        paddingHorizontal:25,       
         justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
    },
    text:{
        color:"#01135B",
        fontSize:14,
        fontFamily:"roboto-condensed",
        textAlign:"center"
    },
    conatainerButtons:{
        flexDirection:"row",
        justifyContent:"space-around",
    }
  });

export default ModalMakePay