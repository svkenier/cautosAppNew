import React from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const ModalScheduleTrip = ({handleModalSchedule}) => {
  return (
    <Pressable onPress={()=>handleModalSchedule()} style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>Fecha y hora del servicio</Text>
        <View style={styles.containerInputs}>
          <View style={styles.containerInput}>
            <Pressable style={styles.icon}>
              <MaterialCommunityIcons name="calendar" size={24} color="black" />
            </Pressable>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.containerInput}>
            <Pressable style={styles.icon}>
              <AntDesign name="clockcircleo" size={24} color="black" />
            </Pressable>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={styles.containerButtons}>
          <View style={styles.containerButton}>
            <CustomButton
              typeButton="terseary"
              typeText="secondary"
              textButton="Guardar"
            />
            <View />
          </View>
          <View style={styles.containerButton}>
            <CustomButton
              typeButton="terseary"
              typeText="secondary"
              textButton="Cancelar"
            />
            <View />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#9c9c9c",
    flex: 1,
    justifyContent: "center",
  },

  container: {
    backgroundColor: "#fff",
    width: "100%",
    minHeight: "60%",
    alignItems: "center",
  },
  title: {
    fontFamily: "roboto-regular",
    fontSize: 20,
    marginVertical: 30,
  },

  containerInputs: {
    width: "90%",
    gap: 15,
  },

  containerInput: {
    width: "100%",
    height: "24%",
    position:"relative"
  },

  input: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#9c9c9c",
    borderStyle: "dashed",
    backgroundColor: "#fff",
    paddingLeft:50
  },
  icon: {
    position: "absolute",
    left: 15,
    top: 15,
    zIndex: 1,
  },
  containerButtons: {
    width: "100%",
    flexDirection: "row",
    
  },
  containerButton: {
    width: "50%",
    justifyContent:"center",
    alignItems:"center"
  },
});

export default ModalScheduleTrip;
