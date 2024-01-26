import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import StepperForm from "../components/StepperForm";
import { MaterialIcons } from "@expo/vector-icons";
import LogoCautos from "../components/LogoCautos";
import {useNavigation} from "@react-navigation/native"
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";
import { LinearGradient } from 'expo-linear-gradient';


const RegisterScreen = () => {
  const navigation = useNavigation()

  let [fontLoaded] = useFonts(Fonts);
    
    if (!fontLoaded) {
      return <View/>;
    }


  return (
    <SafeAreaView style={styles.root}>
      <LinearGradient
        // Background Linear Gradient
        colors={[ '#27C4B0','#16778B','#00135B']}
        style={styles.background}
        />
        <ScrollView style={styles.fondo}>
        <View style={styles.title}>
          <View style={styles.icon}>
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialIcons name="keyboard-backspace" size={50} color="#fff" />
            </Pressable>
          </View>
          <View style={styles.ContainerText}>
            <Text style={styles.text}>registrase</Text>
          </View>
        </View>

        <View style={styles.fondo}>
          <LogoCautos />
          <StepperForm style={styles.stepForm} />
        </View>
    </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    height:"100%",
 
   
    
  },

  fondo: {
    width: "100%",
    height: "100%",
  },
  background:{
    width:'100%',
    height:"100%",
    position:"absolute",
 
  },
  containerButton: {
    width: "70%",
    alignItems: "flex-start",
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontFamily:"roboto-condensed"
  },

  StepContainer: {
    alignItems: "flex-start",
    width: "72%",
  },
  
 
  stepForm: {
    height: "100%",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "flex-start",
    alignItems:"center"
    

  },
  icon: { 
    width: "12%",
    marginTop:30,
    marginLeft:25
  },

  ContainerText: { 
    width: "80%",
    alignItems: "center",
    marginTop:30 
  },
 
});

export default RegisterScreen;
