import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StopsContext } from "../context/StopsContext.jsx";
import { View, StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";

const DrawerMenu = ({ handleDrawer}) => {
  const data = {
    saldo: 0,
    id: "@584146653696",
  };
  const navigation = useNavigation();

  const { setactive,active } = useContext(StopsContext);

  const handlePress = (value) => {
    setactive(value);
    value==="Solicitar servicio"?
    navigation.navigate("map"): navigation.navigate(value)
    handleDrawer(false)
  };

  let [fontLoaded] = useFonts(Fonts);
    
  if (!fontLoaded) {
    return <View/>;
  }


  return (
    <SafeAreaView style={styles.drawerMenu}>
      <View style={styles.menu}>
        <View
          style={styles.headMenu}
        >
          <View
            style={styles.containerMenuSaldo}
          >
            <Text
              style={styles.titleMenu}
            >
              Menú
            </Text>
            <Text
              style={styles.saldo}
            >
              $ {data.saldo}
            </Text>
          </View>
          <View>
            <Text style={styles.id}>{data.id}</Text>
          </View>
        </View>

      <View style={styles.bodyMenu}>

        <View style={styles.containersButtons}>
          <Pressable
            onPress={() => handlePress("Solicitar servicio")}
            style={
              active === "Solicitar servicio"
                ? styles.buttonActive
                : styles.button
            }
          >
            <Text style={styles.icon}>
              <MaterialIcons
                name="local-taxi"
                size={24}
                color={active === "Solicitar servicio" ? "black" : "white"}
              />
            </Text>
            <Text
              style={
                active === "Solicitar servicio"
                  ? styles.titleActive
                  : styles.title
              }
            >
              Solicitar servicio
            </Text>
          </Pressable>

          <Pressable
            onPress={() => handlePress("Cautos Banco")}
            style={
              active === "Cautos Banco" ? styles.buttonActive : styles.button
            }
          >
            <Text style={styles.icon}>
              <MaterialIcons
                name="monetization-on"
                size={24}
                color={active === "Cautos Banco" ? "black" : "white"}
              />
            </Text>
            <Text
              style={
                active === "Cautos Banco" ? styles.titleActive : styles.title
              }
            >
              Cautos Banco
            </Text>
          </Pressable>

          <Pressable
            onPress={() => handlePress("Historial de sevicios")}
            style={
              active === "Historial de sevicios"
                ? styles.buttonActive
                : styles.button
            }
          >
            <Text style={styles.icon}>
              <MaterialIcons name="history" size={24}  color={active === "Historial de sevicios" ? "black" : "white"} />
            </Text>
            <Text
              style={
                active === "Historial de sevicios"
                  ? styles.titleActive
                  : styles.title
              }
            >
              Historial de sevicios
            </Text>
          </Pressable>

          <Pressable
            onPress={() => handlePress("Servicios extraurbanos")}
            style={
              active === "Servicios extraurbanos"
                ? styles.buttonActive
                : styles.button
            }
          >
            <Text style={styles.icon}>
              <MaterialIcons name="map" size={24}  color={active === "Servicios extraurbanos" ? "black" : "white"} />
            </Text>
            <Text
              style={
                active === "Servicios extraurbanos"
                  ? styles.titleActive
                  : styles.title
              }
            >
              Servicios extraurbanos
            </Text>
          </Pressable>

          <Pressable
            onPress={() => handlePress("Atención al cliente")}
            style={
              active === "Atención al cliente"
                ? styles.buttonActive
                : styles.button
            }
          >
            <Text style={styles.icon}>
               <FontAwesome name="whatsapp" size={24}   color={active === "Atención al cliente" ? "black" : "white"} />
            </Text>
            <Text
              style={
                active === "Atención al cliente"
                  ? styles.titleActive
                  : styles.title
              }
            >
              Atención al cliente
            </Text>
          </Pressable>
        </View>
        
        <Text style={styles.versions}>V5.21.2</Text>

        </View>
        <Pressable onPress={()=>navigation.navigate("login")} style={styles.Logout}>
        <Text style={styles.LogoutTitle}>Salir</Text>
        </Pressable>

      </View>

      <View style={styles.ConatainerBack}>
        <Pressable style={styles.back} onPress={handleDrawer}></Pressable>
      </View>
    </SafeAreaView>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  drawerMenu: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  menu: {
    backgroundColor: "#020025",
    width: "75%",
    height: "100%",
  },

  ConatainerBack: {
    width: "25%",
  },

  title: {
    color: "#fff",
    fontSize:14,
    fontFamily:"roboto-boldCondensed"
  },
  titleActive: {
    color: "#000",
    fontSize:14,
    fontFamily:"roboto-boldCondensed"
   
  },

  back: {
    width: "100%",
    height: "100%",
  },

  containersButtons:{width:"100%"},
  button: {
    width: "90%",
    padding: 15,
    paddingLeft: 25,
    marginRight: 5,
    marginLeft:0,
    alignItems: "center",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    gap: 15,
  },
  buttonActive: {
    width: "90%",
    padding: 15,
    paddingLeft: 25,
    marginRight: 5,
    marginLeft:0,
    alignItems: "center",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    gap: 15,
  },
  headMenu:{
    width: "100%",
    marginTop: 15,
    padding: 20,
    gap: 10,
  },
  containerMenuSaldo:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },

  saldo:{
    color: "#21A9A3",
    fontSize: 20,
    fontFamily:"roboto-boldCondensed",
    alignItems: "center",
  },
  titleMenu:{
    color: "#fff",
    fontFamily:"roboto-boldCondensed",
    fontSize: 24,
    alignItems: "center",
    
  },
bodyMenu:{
  width:"100%",
  flex:1,
  justifyContent:"space-between",
  alignItems:"center",
  backgroundColor:"#21A9A3"
},

versions:{
  fontSize:16,
  fontFamily:"roboto-boldCondensed",
  color:"#fff"
},
Logout:{
  padding:12,
  width:"100%",

},

LogoutTitle:{
color:"#fff",
textAlign:"center",
fontSize:16,
fontFamily:"roboto-boldCondensed"
},
id:{ 
color: "#fff",
fontSize: 14,
fontFamily:"roboto-boldCondensed"
}

});
