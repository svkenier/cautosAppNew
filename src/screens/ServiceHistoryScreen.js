import React, { useState, useEffect, useContext } from "react";
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
import { Entypo } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";
import { StopsContext } from "../context/StopsContext";
import ItemDataDrivers from "../components/ItemDataDrivers";
import useShowDetails from "../hooks/useShowDetails";

const ServiceHistoryScreen = (props) => {
  const { setActiveOptionMenu } = useContext(StopsContext);
  const { handleDrawer, openDrawer } = useDrawer();
  const { dataDrivers, showDetailsServices } = useShowDetails();
  const [active, setAtieve] = useState("Todo");
  const [driversList, setDriversList] = useState(dataDrivers);

  const handlePress = (optionSelected) => {
    setAtieve(optionSelected);
    if (optionSelected !== "Todo") {
      
      const result = dataDrivers.filter((item) => item.status === optionSelected 
         
         )
         setDriversList(result);
         
     } else {
       setDriversList(dataDrivers);
     }
  };

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

  // useEffect(() => {
  //  if (setActiveOptionMenu != "Historial de sevicios" ) {
  //    setActiveOptionMenu("Historial de sevicios")

  //  }

  // }, )

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
            <Text style={styles.title}>HISTORIAL DE SERVICIOS</Text>
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
        <ScrollView horizontal={true} style={styles.OptionsScroll}>
          <Pressable onPress={() => handlePress("Todo")}>
            <Text
              style={active === "Todo" ? styles.OptionActive : styles.option}
            >
              TODO
            </Text>
          </Pressable>
          <Pressable onPress={() => handlePress("Rodando")}>
            <Text
              style={
                active === "Rodando" ? styles.OptionActive : styles.option
              }
            >
              EN CURSO
            </Text>
          </Pressable>
          <Pressable onPress={() => handlePress("Pendiente")}>
            <Text
              style={
                active === "Pendiente" ? styles.OptionActive : styles.option
              }
            >
              PENDIENTES
            </Text>
          </Pressable>
          <Pressable onPress={() => handlePress("Por pagar")}>
            <Text
              style={
                active === "Por pagar" ? styles.OptionActive : styles.option
              }
            >
              POR PAGAR
            </Text>
          </Pressable>
          <Pressable onPress={() => handlePress("Pagado")}>
            <Text
              style={active === "Pagado" ? styles.OptionActive : styles.option}
            >
              PAGADO
            </Text>
          </Pressable>
        </ScrollView>

        {driversList.length > 0 ? (
          driversList.map((item, index) => (
            <ItemDataDrivers
              showDetailsServices={showDetailsServices}
              key={index}
              item={item}
            />
          ))
        ) : (
          <Text style={styles.message}>
            Aún no ha realizado ninguna recarga.
          </Text>
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
    marginTop: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontFamily: "teko-bold",
    fontSize: 25,
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

  OptionsScroll: { width: "75%", maxHeight: "6%" },

  option: {
    padding: 7,
    color: "#8C8C8C",
    fontFamily: "roboto-condensed",
    marginHorizontal: 9,
  },

  OptionActive: {
    color: "#01135B",
    padding: 7,
    borderBottomColor: "#01135B",
    borderBottomWidth: 3,
    fontFamily: "roboto-condensed",
    marginHorizontal: 9,
  },

  message: {
    color: "#8C8C8C",
    marginTop: 30,
    fontFamily: "roboto-regular",
    fontSize: 12,
  },
});

export default ServiceHistoryScreen;
