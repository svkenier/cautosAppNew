import React, { useState, useContext, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import useDrawer from "../hooks/useDrawer";
import DrawerMenu from "../components/DrawerMenu";
import * as Animatable from "react-native-animatable";
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";
import { useNavigation } from "@react-navigation/native";
import { StopsContext } from "../context/StopsContext";
import ItemTransactionList from "../components/ItemTransactionList";
import useShowDetails from "../hooks/useShowDetails";

const CautosBancoScreen = () => {
  //   useEffect(() => {
  //     if (setActiveOptionMenu != "Cautos banco") {
  //       setActiveOptionMenu("Cautos banco")
  //     }

  //  },[])

  const { showDetailsTransaction, transactionList } = useShowDetails();

  const { handleDrawer, openDrawer } = useDrawer();
  const [active, setActive] = useState("Todo");

  const navigation = useNavigation();
  const { setActiveOptionMenu } = useContext(StopsContext);
  const [dataTransaction, setDataTransaction] = useState(transactionList);

  const handlePress = (optionSelected) => {
    setActive(optionSelected);
    if (optionSelected !== "Todo") {
      
     const result = transactionList.filter((item) => item.status === optionSelected 
        
        )
        setDataTransaction(result);
        
    } else {
      setDataTransaction(transactionList);
    }
  };


  console.log("aquiaaa", dataTransaction
  )
  console.log("active",active)

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

          <View style={styles.containercredit}>
            <View style={styles.credit}>
              <Text style={styles.saldo}>$ 0 </Text>
              <Text style={styles.typeMoney}>USD</Text>
            </View>
            <Text style={styles.stausText}>Disponible</Text>
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
          <Pressable onPress={() => handlePress("Aprobado")}>
            <Text
              style={
                active === "Aprobado" ? styles.OptionActive : styles.option
              }
            >
              APROBADAS
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
          <Pressable onPress={() => handlePress("Rechazada")}>
            <Text
              style={
                active === "Rechazada" ? styles.OptionActive : styles.option
              }
            >
              RECHAZADAS
            </Text>
          </Pressable>
        </ScrollView>

        {dataTransaction.length > 0 ? (
          dataTransaction.map((item, index) => (
            <ItemTransactionList
              key={index}
              showDetailsTransaction={showDetailsTransaction}
              item={item}
            />
          ))
        ) : (
          <Text style={styles.message}>
            Aún no ha realizado ninguna recarga.
          </Text>
        )}

        <View style={styles.containerButtons}>
          <Pressable onPress={() => navigation.navigate("swapScreen")}>
            <View style={styles.buttonSwap}>
              <AntDesign name="swap" size={30} color="white" />
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("banksScreen")}>
            <View style={styles.buttonBank}>
              <MaterialCommunityIcons name="bank" size={30} color="white" />
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("recordDepositScreen")}>
            <View style={styles.buttonAdd}>
              <MaterialIcons name="add" size={30} color="white" />
            </View>
          </Pressable>
        </View>
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
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
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

  containercredit: {
    justifyContent: "center",
    alignItems: "center",
    width: "65%",
  },

  credit: { flexDirection: "row" },

  saldo: { fontFamily: "roboto-light", fontSize: 34, color: "#fff" },

  typeMoney: { fontFamily: "roboto-regular", fontSize: 16, color: "#fff" },

  stausText: { fontFamily: "roboto-light", fontSize: 16, color: "#fff" },

  displayDown: {
    backgroundColor: "#fff",
    width: "100%",
    height: "80%",
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    alignItems: "center",
    paddingTop: 15,
    position: "relative",
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

  transactionList: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  containerButtons: {
    position: "absolute",
    right: 30,
    bottom: 50,
    gap: 15,
  },

  buttonSwap: {
    backgroundColor: "#01135B",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  buttonBank: {
    backgroundColor: "#01135B",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  buttonAdd: {
    backgroundColor: "#01135B",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  message: {
    color: "#8C8C8C",
    marginTop: 30,
    fontFamily: "roboto-regular",
    fontSize: 12,
  },
});

export default CautosBancoScreen;
