import React from 'react'
import { View,SafeAreaView,StyleSheet,Pressable,Text } from "react-native"
import { AntDesign ,MaterialIcons} from '@expo/vector-icons';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";
import { useNavigation } from "@react-navigation/native";
import InputCustom from '../components/InputCustom';

const SwapScreen = () => {
    const navigation = useNavigation();

    let [fontLoaded] = useFonts(Fonts);

  if (!fontLoaded) {
    return <View />;
  }

  return (
    <SafeAreaView style={styles.root}>
         <View style={styles.iconBack}>
            <Pressable onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
            </Pressable>
          </View>
          
          <Text style={styles.title}>P2P</Text>
        <View style={styles.icon}><AntDesign name="swap" size={30} color="#01135B"/></View>
        
        <Text style={styles.text}>Envia dinero de tu cuenta a cualquier otro usuario dentro de la aplicación</Text>
        
        <CustomInput style={styles.input} icon={<MaterialIcons name="smartphone" size={24} color="#01135B" />} label='Nro. de telefono'/>
       
        {/* <InputCustom 
        style={styles.input}
        label={'Course Name'}
        iconClass={MaterialIcons}
        iconName={'smartphone'}
        iconColor={'#01135B'}
        iconSize={22}
        iconWidth={30}
        inputPadding={12}
        
        /> */}
        <View style={styles.containerButtom}>
        <CustomButton style={styles.Buttom} textButton="CONTINUAR" typeButton="terseary" />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
root:{
    width:"100%",
    flex:1,
    alignItems:"center",
    padding:10

},
iconBack:{
    marginTop:30,
    marginLeft:25,
    alignSelf:"flex-start"
},
title:{
    marginTop:50,
    fontFamily:"teko-light",
    fontSize:28,
    color:'#01135B',

},
icon:{
    marginBottom:50
},

text:{
    textAlign:"center",
    width:"100%",
    marginBottom:50,
    fontFamily:"roboto-regular",
    color:'#01135B',
    fontSize:14
},

containerButtom:{
    width:'100%',
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center",

},





})

export default SwapScreen