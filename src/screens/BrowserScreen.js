import React from "react";
import { useState, useRef, useContext } from "react";
import { View, StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import useBrowserAddress from "../hooks/useBrowserAddress";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";

const BrowserScreen = () => {
  const [inputAdrees, setInputAddress] = useState("");
  const navigation = useNavigation();
  const GooglePlacesRef = useRef();
  const { addStop, address } = useBrowserAddress();

  const getDireccion = (details) => {
    setInputAddress(details.description);
    const { lat, lng } = details.geometry.location;
    let coordeneadas = { latitude: lat, longitude: lng };
    addStop(coordeneadas);
  };

  const handleClear = () => {
    GooglePlacesRef.current?.clear();
  };

  let [fontLoaded] = useFonts(Fonts);
    
  if (!fontLoaded) {
    return <View/>;
  }


  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.fondo}>

        {/* titulo y buscador */}
        <View style={styles.containerTitleAndBrowser}>
          
          <View style={styles.iconBack}>
            <Pressable onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
            </Pressable>
          </View>

          <Text style={styles.title}>¿A DÓNDE QUIERES IR?</Text>

          <GooglePlacesAutocomplete
            placeholder="Ingresa una dirección"
            value={address}
            ref={GooglePlacesRef}
            onPress={(data, details = null) => {
              getDireccion(details);
            }}
            query={{
              key: GOOGLE_MAPS_KEY,
              language: "es",
              types: "address",
              components: "country:ve",
            }}
            styles={styles.autocompleteInput}
            fetchDetails={true}
          />
        </View>

        {/* boton */}

        <View style={styles.containerButton}>
          <CustomButton
            handlePress={() => navigation.goBack()}
            textButton="SELECCIONAR EN EL MAPA"
            typeButton="terseary"
            typeText="secondary"
            iconLeft="back"
            iconRight="map"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    flex: 1,
    zIndex: 2,
  },

  fondo: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },

  iconBack: { alignSelf: "flex-start", marginLeft: 20 },
  containerButton: {
    marginBottom: 40,
    alignItems: "center",
  },
  autocompleteInput: {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      paddingHorizontal: 15,
      marginTop: 55,
    },
    textInput: {
      borderColor: "#888",
      borderWidth: 1,
      borderRadius: 20,
      marginTop: 35,
    },
    listView: { backgroundColor: "white" },
  },
  containerTitleAndBrowser: { marginTop: 40, alignItems: "center", gap: 20 },

  title: { fontSize: 20, color: "#020126",fontFamily:"teko-medium" },
});

export default BrowserScreen;
