import React from "react";
import { Text, View, StyleSheet, Pressable,SafeAreaView } from "react-native";
import { MaterialIcons} from '@expo/vector-icons';
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";


const Dropdown = ({item,index,active,handlePress}) => {
    const {bank,money,accountNumber,titular,cedula,email} = item

    /* 
    {
           
            bank:'Bank of America',
            money:"USD",
            accountNumber:"cautosca",
            titular:"CAUTOS, C.A.",
            cedula:"j-412396196",
            email:"admicautosca@gmail.com"
        },
    */

   
        let [fontLoaded] = useFonts(Fonts);

  if (!fontLoaded) {
    return <View />;
  }
    

  return (
    <SafeAreaView style={styles.root}>
      {/* presinable */}

        <Pressable onPress={()=>handlePress(index)}>
      <View style={styles.conatainerTitle}>
        <Text style={styles.title}>{bank}</Text>
        {
        active === index ?<MaterialIcons name="keyboard-arrow-up" size={30} color="#01135B" />:
        <MaterialIcons name="keyboard-arrow-down" size={30} color="#01135B" />}
       
      </View>
        </Pressable>
      
      {/* info */}
      <View style={active === index ? styles.info : styles.hideen}>
        <View style={styles.cell}>
          <Text style={styles.cellLeft}>Banco</Text>
          <Text style={styles.cellRight}>{bank}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.cellLeft}>Moneda</Text>
          <Text style={styles.cellRight}>{money}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellLeft}>Nro. de cuenta</Text>
          <Text style={styles.cellRight}>{accountNumber}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellLeft}>Titular</Text>
          <Text style={styles.cellRight}>{titular}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellLeft}>C.I</Text>
          <Text style={styles.cellRight}>{cedula}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellLeft}>Correo</Text>
          <Text style={styles.cellRight}>{email}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    width:"100%",
    borderWidth:0.5,
    borderColor:"#8c8c8c",
    
    
  },
  conatainerTitle: {
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:8
  },
  title:{
    color:"#01135B",
    padding:15,
    fontFamily:"roboto-condensed",
    fontSize:14
    
  },
  info:{
    padding:20,
    paddingTop:0
  },
  cell:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  cellLeft:{
    fontFamily:"roboto-condensed",
    color:"#8C8C8C"
  },
  cellRight:{
    color:"#01135B",
    fontFamily:"roboto-condensed"
  },
  hideen:{
    display:"none"
  }

});

export default Dropdown;
