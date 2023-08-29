import React from "react";
import { useContext,useEffect,useCallback } from "react";
import { StopsContext } from "../context/StopsContext.jsx";
import { SafeAreaView, View, Text, StyleSheet,Pressable } from "react-native";
import CustomButton from "../components/CustomButton";
import ItemStops from "../components/ItemStops";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";

const StopsListScreen = () => {

  
    

  
  const { stops,setStops } = useContext(StopsContext);
  const navigation = useNavigation();
  

  let [fontLoaded] = useFonts(Fonts);
    
  if (!fontLoaded) {
    return <View/>;
  }


 const clearMaps = () =>{
  setStops([]);
  navigation.goBack()
 }

  return (
      
    <SafeAreaView style={styles.root}   >

      <View style={styles.fondo}>
        <View style={styles.containerTitle}>
          
        <View style={styles.iconBack}>
            <Pressable onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
            </Pressable>
          </View>

          <Text style={styles.title}>LISTA DE PARADAS</Text>

          <View style={styles.showStops}>
            {stops.length === 0 ? (
              <Text style={styles.showStopsTitle}>
                aún no has elegido ninguna parada
              </Text>
            ) : (
              <View>
                {stops.map((item, index) => (
                  <ItemStops key={index} index={index + 1} item={item} />
                  ))}
              </View>
            )}
          </View>
        </View>

        <View style={styles.containerButton}>
          <CustomButton
          handlePress={()=>clearMaps()}
          textButton="LIMPIAR DE EL MAPA"
            typeButton="terseary"
            typeText="secondary"
            iconLeft="replay"
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
  containerButton: {
    marginBottom: 40,
    alignItems: "center",
  },

  containerTitle: { marginTop: 60, alignItems: "center", gap: 20 },

  iconBack:{ alignSelf: "flex-start", marginLeft: 20 },

  title: { fontSize: 20, color: "#020126",  fontFamily: "teko-medium" },

  showStops: { alignItems: "center", width: "100%" },

  showStopsTitle: {
    fontFamily:"roboto-regular",
    fontSize:14,
  },
});

export default StopsListScreen;
