import React from 'react'
import { Text,SafeAreaView,StyleSheet,View,Pressable } from 'react-native'
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation,useRoute } from "@react-navigation/native";



const DetailsTransactionScreen = ({props}) => {

  const route = useRoute();
  const { transactionFound } = route.params;

  

  const navigation = useNavigation();

  const {dateDeposit,bank,typeOperation,reference,amountDeposited,acredictedAmount,status} = transactionFound

  return (
  <SafeAreaView style={styles.root}>
    <View style={styles.iconBack}>
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
        </Pressable>
      </View>
      <Text style={styles.title}>DETALLES DE LA TRANSACCIÓN</Text>

      <View style={styles.table}>
        <View style={styles.cell}>
        <Text style={styles.cellLeft}>Fecha del deposito</Text>
        <Text style={styles.cellRight}>{dateDeposit}</Text>
        </View>
        <View style={styles.cell}>
        <Text style={styles.cellLeft}>Banco</Text>
        <Text style={styles.cellRight}>{bank}</Text>
        </View>
        <View style={styles.cell}>
        <Text style={styles.cellLeft}>Tipo de operacion</Text>
        <Text style={styles.cellRight}>{typeOperation}</Text>
        </View>
        <View style={styles.cell}>
        <Text style={styles.cellLeft}>Referencia</Text>
        <Text style={styles.cellRight}>{reference}</Text>
        </View>
        <View style={styles.cell}>
        <Text style={styles.cellLeft}>Monto depósitado</Text>
        <Text style={styles.cellRight}>{amountDeposited}</Text>
        </View>
        <View style={styles.cell}>
        <Text style={styles.cellLeft}>Monto acreditado</Text>
        <Text style={styles.cellRight}>{acredictedAmount}</Text>
        </View>
        <View style={[styles.cell, { borderBottomWidth:0 }]}>
        <Text style={styles.cellLeft}>estado</Text>
        <Text style={styles.cellRight}> {status === "Aprobado" ? (
              <>
                {status} <AntDesign name="checkcircleo" size={24} color="green" />
              </>
            ) : status === "Rechazada" ? (
              <>
                {status} <AntDesign name="closecircleo" size={24} color="red" />
              </>
            ):(
              status
            )}</Text>
        </View>
      </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
  iconBack: {
    marginTop: 35,
    marginLeft: 25,
    alignSelf: "flex-start",
  },
  title: {
    fontFamily: "teko-regular",
    fontSize: 28,
    color: "#01135B",
    marginVertical: 10
  },
  table: {
    borderWidth: 1,
    borderColor: "#888",
    width: "90%",
    borderRadius: 20,
  },
  cell: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "#888",
  },
  cellLeft: {
    fontFamily: "roboto-condensed",
    color: "#8C8C8C",
  },
  cellRight: {
    color: "#01135B",
    fontFamily: "roboto-condensed",
  },

});

export default DetailsTransactionScreen