import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomInput from "./CustomInput";
import {  useFormikContext } from "formik";
import { MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";

const PersonalInfo = () => {
  const { values,errors,touched, handleChange,handleBlur } = useFormikContext();

  let [fontLoaded] = useFonts(Fonts);
    
  if (!fontLoaded) {
    return <View/>;
  }
  return (
    <View style={styles.root}>
      <View style={styles.StepContainer}>
        <Text style={styles.stepTitle}>Datos personales</Text>
      </View>

      <View style={styles.containerInput}>
        <CustomInput
          
          onChangeText={handleChange("name")}
          name="name"
          label="Nomber"
          value={values.name}
          helperText={errors.name && touched.name && <Text style={styles.error}>{errors.name}</Text> }
          onBlur={handleBlur("name")}
          icon={<FontAwesome5  name="user" size={24} color="#01135B" />}
          
          
          />
          

        <CustomInput
          label={"Apellido"}
          onChangeText={handleChange("lastName")}
          name="lastName"

          value={values.lastName}
          helperText={errors.lastName && touched.lastName && <Text style={styles.error}>{errors.lastName}</Text> }
          onBlur={handleBlur("lastName")}
          icon={<FontAwesome5  name="user" size={24} color="#01135B" />}
        />

        <CustomInput
          label={"Correo"}
          onChangeText={handleChange("email")}
          name="email"
          value={values.email}
          helperText={errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text> }
          onBlur={handleBlur("email")}
          icon={<MaterialCommunityIcons name="email-outline" size={24} color="#01135B" />}
        />
        <CustomInput
          label={"Cedula"}
          name="cedula"
          onChangeText={handleChange("cedula")}
          value={values.cedula}
          helperText={errors.cedula && touched.cedula && <Text style={styles.error}>{errors.cedula}</Text> }
          onBlur={handleBlur("cedula")}
          icon={<MaterialIcons name="badge" size={24} color="#01135B" />}
        />
        <CustomInput
          label={"Telefono"}
          onChangeText={handleChange("phone")}
          name="phone"
          value={values.phone}
          helperText={errors.cedula && touched.phone && <Text style={styles.error}>{errors.phone}</Text> }
          onBlur={handleBlur("phone")}
          icon={<MaterialIcons name="smartphone" size={24} color="#01135B" />}
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
    width: "72%",
  },
  stepTitle: {
    color: "#fff",
    fontFamily:"roboto-boldCondensed",
    fontSize: 14,
    marginVertical: 10,
  },
  containerInput: {
    gap:10,
    width: "100%",
    alignItems: "flex-end",
  },
  error:{
    color:"red",
    fontWeight:"bold",
    fontSize:10,
  },
});

export default PersonalInfo;
