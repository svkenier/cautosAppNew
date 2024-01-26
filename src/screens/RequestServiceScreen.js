import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  Modal
} from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ItemVehicles from "../components/ItemVehicles";
import Slider from "../components/Slider";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import ModalScheduleTrip from "../components/ModalScheduleTrip";

const RequestServiceScreen = () => {
  const navigation = useNavigation();
  const [comentRef, setComentRef] = useState("");
  const [inFocus, setInfocus] = useState(false);
  const [isOpenModalSchedule, setIsOpenModalSchedule] = useState(false);

  const handleFocus = () =>{
    setInfocus(true)
  }

  const handleOnEndEditing = () =>{
    setInfocus(false)
  }

  console.log(inFocus)
  

  const handleModalSchedule = () => {
    setIsOpenModalSchedule(!isOpenModalSchedule);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.iconBack}>
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
        </Pressable>
      </View>
      <Text style={styles.title}>Seleciona tu vehiculo</Text>

       <Slider /> 

      <Text
        style={{
          alignSelf: "flex-start",
          marginLeft: 20,
          marginVertical: 10,
          fontFamily: "teko-regular",
          fontSize: 16,
          color:"#01135B"
        }}
      >
        Comentario De referencia
      </Text>

      <TextInput
        
        style={{
          width: "90%",
          paddingLeft:15,
          paddingBottom:80,
          borderWidth: inFocus ?1 :0.5,
          borderColor: inFocus ? "#01135B": "#888",
          borderRadius: 50,
          backgroundColor: "#fff",
        }}
        placeholder={"vestimenta, punto de encuentro entre otros"}
        multiline
        numberOfLines={4}
        onFocus={()=> handleFocus()} 
        onEndEditing={()=> handleOnEndEditing()}
        value={comentRef}
        onChangeText={text => setComentRef(text)}
      />
      <Text style={{alignSelf:"flex-end", marginRight:"12%",color:"#888", fontSize:12}}>{comentRef.length}/250</Text>

      <View style={{
        flexDirection:"row",
        width:"100%",
        marginTop:20,
        alignItems:"flex-end",
        flex:1,
        paddingBottom:20

      }}>
        <View style={{width:"50%" , marginLeft:10}}>
      <CustomButton handlePress={() => handleModalSchedule()} typeButton="terseary" typeText="secondary" textButton="PROGRAMAR"/>
        </View>
        <View style={{width:"50%"}}>
      <CustomButton handlePress={() => navigation.navigate("DetailsServicesScreen")} typeButton="terseary" typeText="secondary" textButton="ACEPTAR" />
        </View>
      </View>

       {/* modal de ModalScheduleTrip */}

       <Modal
            visible={isOpenModalSchedule}
            transparent={false}
            animationType="slide"
          >
            <ModalScheduleTrip handleModalSchedule={handleModalSchedule} />
          </Modal>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
  iconBack: {
    marginTop: 30,
    marginLeft: 25,
    alignSelf: "flex-start",
  },
  title: {
    fontFamily: "teko-regular",
    fontSize: 28,
    color: "#01135B",
  },
  containerSlider: {
    backgroundColor: "blue",
    width: "85%",
    borderRadius: 60,
    height: "20%",
  },
  slider: {
    width: "100%",
    height: "80%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default RequestServiceScreen;
