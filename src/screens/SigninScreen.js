import { View, Text, StyleSheet, Modal, SafeAreaView } from "react-native";
import React, { useState } from "react";

import CustomButton from "../components/CustomButton";
import LogoCautos from "../components/LogoCautos";
import PhoneInput from "react-native-phone-number-input";
import {useNavigation} from "@react-navigation/native"
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";
import { LinearGradient } from 'expo-linear-gradient';

const SigninScreen = () => {

  const [phone, setPhone] = useState("");
    const navigation = useNavigation()

    let [fontLoaded] = useFonts(Fonts);
    
    if (!fontLoaded) {
      return <View/>;
    }  

  return (
    <View style={styles.root}>

<LinearGradient
        // Background Linear Gradient
        colors={[ '#27C4B0','#16778B','#00135B']}
        style={styles.background}
        />

      <View style={styles.fondo}>
        <LogoCautos />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.text}>Ingresa tu número de teléfono</Text>
      </View>

      <PhoneInput
        defaultCode="VE"
        containerStyle={{ borderRadius: 50,width:"90%" }}
        textContainerStyle={{ borderRadius: 50 }}
        placeholder="Numero telefonico"
      />
      <View style={styles.buttons}>
        <CustomButton
          textButton="continuar"
          typeButton="primary"
          typeText="primary"
          handlePress={() => navigation.navigate('map')}
        />

        <CustomButton
          textButton="registrate"
          typeButton="secondary"
          typeText="primary"
          handlePress={() => navigation.navigate('register')}
        />
</View>

      

    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    flex:1,
    
  },
  containerText: {
    width: "100%",
    alignItems: "center",
    marginBottom:15
  
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontFamily:"roboto-condensed"
    
  },

  buttons: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  fondo: {
    width: "100%",
   
  },
  background:{
    width:'100%',
    height:"100%",
    position:"absolute",
    top:0
  }
});

export default SigninScreen;
