import React from 'react'
import { Text,View,StyleSheet,Pressable} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const ModalAddPhoto = ({handleModalPhoto}) => {
  return (
    <View style={styles.containerModal}>

        <Pressable onPress={()=>handleModalPhoto()} style={styles.exitModal}></Pressable>
        
        <View style={styles.modal} >

        <Pressable style={styles.optionsModal}>
        <MaterialIcons name="photo-camera" size={24} color="#fff" />
          <Text style={styles.textModal}>TOMAR FOTO</Text>
        </Pressable>
        
        <Pressable style={styles.optionsModal}>
        <MaterialIcons name="photo-library" size={24} color="#fff" />
          <Text style={styles.textModal} >SCOGER DESDE LA GALERÍA</Text>
        </Pressable>
        
        </View>

        </View>
  )
}

const styles = StyleSheet.create({
    optionsModal:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        gap:5
      },
      textModal:{
        color:"#fff",
        marginLeft:5
      },
      containerModal:{
        backgroundColor: "rgba(0, 0, 0, 0.3)"
      },
    
      exitModal:{
        width:"100%",
        height:"80%",
      },
      modal:{
        backgroundColor:"#01135B",
        width:"100%",
        height:"20%",
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    
      }
})

export default ModalAddPhoto