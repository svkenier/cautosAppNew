import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Pressable,
  Modal,
  
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import ModalAddPhoto from "../components/ModalAddPhoto";
import ModalBankList from "../components/ModalBankList";
import {  useFormikContext } from "formik";
import { Formik } from "formik";
import { initialValues, validationSchema } from "../schemas/recordDeposit";
import {Picker} from '@react-native-picker/picker';



const RecordDepositScreen = () => {
  const [isOpenModalPhoto, setIsOpenModalPhoto] = useState(false);
  const [isOpenModalBank, setIsOpenModalBank] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Cuenta receptora");
  
  const navigation = useNavigation();
  
  
  let [fontLoaded] = useFonts(Fonts);

  if (!fontLoaded) {
    return <View />;
  }

  const handleModalPhoto = () => {
    setIsOpenModalPhoto(!isOpenModalPhoto);
  };

  const handleModalBank = () => {
    setIsOpenModalBank(!isOpenModalBank);
  };

  const handleSubmit = (values) => {
    console.log("fin de formulario");
    console.log("enviando formulario", values);
  };


  return (
    <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
     validationSchema={validationSchema}
  >

{({ handleSubmit,values,errors,touched, handleChange,handleBlur  }) => (

    <SafeAreaView style={styles.root}>
      <View style={styles.iconBack}>
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
        </Pressable>
      </View>

      <Text style={styles.title}>REGISTRAR DEPÓSITO</Text>

      <Text style={styles.subTitle}>Tasa: 32,34 Bs</Text>

      <View style={styles.containerButton}>
        <View style={styles.containerInput}>
        <View style={{ width: "100%", position: "relative" }}>
            <CustomInput
              style={styles.input}
              icon={
                <MaterialIcons
                  name="account-balance-wallet"
                  size={24}
                  color="#8c8c8c"
                />
              }
              label="Cuenta receptora"
              onChangeText={handleChange("receivingAccount")}
              name="receivingAccount"
              value={values.name}
              helperText={errors.receivingAccount && touched.receivingAccount && <Text style={styles.error}>{errors.receivingAccount}</Text> }
              onBlur={handleBlur("receivingAccount")}
         
            />
            <Pressable
              onPress={() => handleModalBank()}
              style={{ width: "100%", height: "100%", position: "absolute" }}
            ></Pressable>
          </View> 

          {/* modal de BankList */}

          <Modal
            visible={isOpenModalBank}
            transparent={true}
            animationType="slide"
          >
            <ModalBankList handleModalBank={handleModalBank} />
          </Modal>

{/* <Picker
style={{width:"100%"}}

  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
    <Text>cuentaaaaa</Text>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker> */}
          <CustomInput
            style={styles.input}
            label="Monto"
            icon={<Text style={styles.iconBs}>Bs</Text>}
            onChangeText={handleChange("amount")}
            name="amount"
            value={values.name}
            helperText={errors.amount && touched.amount && <Text style={styles.error}>{errors.amount}</Text> }
            onBlur={handleBlur("amount")}
          />
          <CustomInput
            style={styles.input}
            label="Referencia"
            icon={
              <MaterialIcons name="receipt-long" size={24} color="#8c8c8c" />
            }
            onChangeText={handleChange("reference")}
            name="amount"
            value={values.name}
            helperText={errors.reference && touched.reference && <Text style={styles.error}>{errors.reference}</Text> }
            onBlur={handleBlur("reference")}
          />
          <CustomInput
            style={styles.input}
            label="Fecha"
            icon={
              <MaterialIcons
                name="insert-invitation"
                size={24}
                color="#8c8c8c"
              />
            }
            onChangeText={handleChange("date")}
            name="date"
            value={values.name}
            helperText={errors.date && touched.date && <Text style={styles.error}>{errors.date}</Text> }
            onBlur={handleBlur("date")}
          />
        </View>

        <Pressable onPress={handleModalPhoto} style={styles.containerIcon}>
          <MaterialIcons name="add-a-photo" size={30} color="#fff" />
        </Pressable>

        <CustomButton textButton="registrar" typeButton="terseary" />
      </View>

      {/* modaal Photo*/}

      <Modal
        transparent={true}
        animationType="slide"
        visible={isOpenModalPhoto}
      >
        <ModalAddPhoto handleModalPhoto={handleModalPhoto} />
      </Modal>
    </SafeAreaView>
    )}
    </Formik>
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
    fontFamily: "teko-medium",
    fontSize: 34,
    color: "#01135B",
  },
  subTitle: {
    fontFamily: "roboto-condensed",
    fontSize: 19.6,
    color: "#01135B",
    marginVertical: 10,
  },
  containerInput: {
    gap: 10,
    width: "90%",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    width: "80%",
    borderRadius: 50,
  },

  iconBs: {
    color: "#8c8c8c",
    fontSize: 16,
  },

  containerIcon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#01135B",
    padding: 15,
    borderRadius: 50,
    position: "absolute",
    right: 20,
    bottom: 70,
  },

  containerButton: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  error:{
    color:"red",
    fontWeight:"bold",
    fontSize:10,
  },
});

export default RecordDepositScreen;
