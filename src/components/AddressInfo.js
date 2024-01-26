import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "./CustomInput";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";


const AddressInfo = () => {
  // const { handleChange, handleSubmit } = useForm();
  const { values, handleChange,handleBlur,touched,errors } = useFormikContext();

  let [fontLoaded] = useFonts(Fonts);
    
  if (!fontLoaded) {
    return <View/>;
  }  
  return (
    <View style={styles.root}>
      <View style={styles.StepContainer}>
        <Text style={styles.stepTitle}>Dirección</Text>
      </View>
      <View style={styles.containerInput}>
        <CustomInput
          label={"Ciudad"}
          onChangeText={handleChange("city")}
          name="city"
          value={values.city}
          helperText={errors.city && touched.city && <Text style={styles.error}>{errors.city}</Text> }
          onBlur={handleBlur("city")}
          icon={<MaterialIcons name="location-city" size={24} color="#01135B" />}
        />
        <CustomInput
          label={"Municipio"}
          onChangeText={handleChange("town")}
          name="town"
          value={values.town}
          helperText={errors.town && touched.town && <Text style={styles.error}>{errors.town}</Text> }
          onBlur={handleBlur("town")}
          icon={<MaterialIcons name="location-on" size={24} color="#01135B" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",

    paddingTop: 5,
  },

  StepContainer: {
    alignItems: "flex-start",
    width: "72%",
  },
  stepTitle: {
    color: "#fff",
    fontFamily:"roboto-boldCondensed",
    fontSize: 14,
    marginVertical: 10,
  },
  containerInput: {
    gap: 20,
    width: "98%",
    alignItems: "flex-end",
  },
  error:{
    color:"red",
    fontWeight:"bold",
    fontSize:10,
  },
});

export default AddressInfo;
