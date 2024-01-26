import React, { useState,useEffect,useContext } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import useDrawer from "../hooks/useDrawer";
import DrawerMenu from "../components/DrawerMenu";
import * as Animatable from "react-native-animatable";
import { Entypo} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";
import ItemExtraubano from "../components/ItemExtraubano";
import { StopsContext } from "../context/StopsContext";

const ServiceExtraurbanoScreen = () => {

    const lugaresVenezuela = [
        {
          lugar: "Caracas",
          distancia: 668,
          precio: 150,
        },
        {
          lugar: "Valencia",
          distancia: 334,
          precio: 80,
        },
        {
          lugar: "Barquisimeto",
          distancia: 384,
          precio: 90,
        },
        {
          lugar: "Maracay",
          distancia: 586,
          precio: 120,
        },
        {
          lugar: "Mérida",
          distancia: 364,
          precio: 100,
        },
      ];
      const { setActiveOptionMenu} = useContext(StopsContext);

    //   useEffect(() => {
    //     if (setActiveOptionMenu != "Servicios extraurbanos") {
    //       setActiveOptionMenu("Servicios extraurbanos")
    //     }
    
    // }, )


  const { handleDrawer, openDrawer } = useDrawer();

  const slideAnimation = {
    from: {
      translateX: openDrawer ? 0 : -8000,
    },
    to: {
      translateX: openDrawer ? -8000 : 0,
    },
  };

  let [fontLoaded] = useFonts(Fonts);

  if (!fontLoaded) {
    return <View />;
  }


  return (
    <SafeAreaView style={styles.root}>
      
      <View style={styles.ContainerDisplayHigh}>
        <View style={styles.displayHigh}>
          <View style={styles.containerMenu}>
            <Pressable style={styles.menu} onPress={handleDrawer}>
              <Entypo
                style={styles.iconMenu}
                name="menu"
                size={24}
                color="black"
              />
            </Pressable>
          </View>

          <View style={styles.containerTitle}>
            <Text style={styles.title}>SERVICIOS EXTRAURBANOS</Text>
          </View>
        </View>
      </View>

      <Animatable.View
        animation={slideAnimation}
        duration={500}
        style={styles.containerDrawerMenu}
      >
        <DrawerMenu handleDrawer={handleDrawer} />
      </Animatable.View>

      <View style={styles.displayDown}>
        
        {lugaresVenezuela.map((item,index)=> <ItemExtraubano key={index} item={item} />
        )}

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#01135B",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },

  ContainerDisplayHigh: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    flexDirection: "row",
  },

  displayHigh: {
    width: "100%",
  },

  containerMenu: {
    backgroundColor: "#fff",
    width: 85,
    height: 55,
    borderRadius: 10,
  },

  menu: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  iconMenu: {
    fontSize: 35,
  },

  containerDrawerMenu: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },

  containerTitle: {
    marginTop:15,
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },

  title: { 
    color:"#fff",
    fontFamily:"teko-bold",
    fontSize:25
 },

  displayDown: {
    backgroundColor: "#fff",
    width: "100%",
    height: "80%",
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    alignItems: "center",
    paddingTop: 15,
  },
});

export default ServiceExtraurbanoScreen;
