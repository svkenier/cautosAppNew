import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, AntDesign,Entypo,Ionicons,FontAwesome5 } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';
import ModalMakePay from "../components/ModalMakePay";
import ItemBankList from "../components/ItemBankList";

const DetailsServicesScreen = ({props}) => {
  const route = useRoute();
  const { driverFound } = route.params;


  const dataInvoce = {
    typeService: "Traslado",
    origen: "McDonals AV Padilla",
    destino: "Parroquia Santa Lucia",
    distace: "12km",
    coste: 3.66,
  };




  console.log("unico screen",driverFound)

  const { driver, vehicles, placa, status, total,banksAccounts,id} = driverFound;
  const { typeService, origen, destino, distace, coste } = dataInvoce;

  const [dropdawnActive, setDropdawnActive] = useState("");
  const [isOpenModalPay, setIsOpenModalPay] = useState(false);

  const navigation = useNavigation();

  const handleModalPay = () => {
    setIsOpenModalPay(!isOpenModalPay);
  };

  const handleMoreDetails = () => {
    dropdawnActive === "moreDetails"
      ? setDropdawnActive("")
      : setDropdawnActive("moreDetails");
  };

  const handleInvoiceDetails = () => {
    dropdawnActive === "invoiceDetails"
      ? setDropdawnActive("")
      : setDropdawnActive("invoiceDetails");
  };

  const handleBankInfo = () => {
    dropdawnActive === "bankInfo"
      ? setDropdawnActive("")
      : setDropdawnActive("bankInfo");
  };

  console.log(dropdawnActive);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.iconBack}>
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
        </Pressable>
      </View>

      <Text style={styles.title}>Detalles del Servicio</Text>

      <View style={styles.table}>
        <View style={styles.cell}>
          <Text style={styles.cellLeft}>Conductor</Text>
          <Text style={styles.cellRight}>{driver}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellLeft}>Vehículo</Text>
          <Text style={styles.cellRight}>{vehicles}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellLeft}>Placa</Text>
          <Text style={styles.cellRight}>{placa}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellLeft}>Estado</Text>
          <Text style={styles.cellRight}>
            {status === "Anulado" ? (
              <>
                {status} <AntDesign name="closecircleo" size={18} color="red" />
              </>
            ) : (
              status === "Pagado" ? (
                <>
                  {status} <AntDesign name="checkcircleo" size={18} color="green" />
                </>
              ) : status === "Rodando" ? (
                <>
                  {status} <Entypo name="cycle" size={18} color="#01135B" />
                </>
              ) : status === "Pendiente" ? (
                <>
                  {status} <Entypo name="back-in-time" size={20} color="#01135B"  />
                </>
              ) : status === "Por pagar" ? (
                <>
                  {status}  <Ionicons name="ellipsis-horizontal-circle-sharp" size={22} color="#E0D609" />
                </>
              ) : status
            )}
          </Text>
        </View>
        <View
          style={[
            styles.cell,
            {
              borderBottomWidth: 0,
              backgroundColor: "#d3d3d3",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            },
          ]}
        >
          <Text style={[styles.cellLeft, { color: "#01135B" }]}>Total</Text>
          <Text style={styles.cellRight}>{"$ " + total}</Text>
        </View>
      </View>

      <View style={styles.dropdawn}>
        <Pressable
          style={styles.invoiceDetailes}
          onPress={() => handleInvoiceDetails()}
        >
          <View style={{ flexDirection: "row", gap: 15 }}>
            <MaterialIcons name="local-taxi" size={24} color="#01135B" />
            <Text style={styles.textTitel}>Detalles de Factura</Text>
          </View>
          {dropdawnActive === "invoiceDetails" ? (
            <MaterialIcons name="keyboard-arrow-up" size={30} color="#01135B" />
          ) : (
            <MaterialIcons name="keyboard-arrow-down" size={30} color="#01135B" />
          )}
        </Pressable>
        {dropdawnActive === "invoiceDetails" && (
          <View style={styles.infoInvoice}>
            <View style={{ width: "80%" }}>
              <View style={styles.cellInvoice}>
                <Text style={styles.typeService}>Servicio {typeService}</Text>
              </View>
              <View style={styles.cellInvoice}>
                <Text style={styles.cellRight}>Desde</Text>
                <Text style={styles.cellLeft}>{origen}</Text>
              </View>
              <View style={styles.cellInvoice}>
                <Text style={styles.cellRight}>Hasta</Text>
                <Text style={styles.cellLeft}>{destino}</Text>
              </View>
            </View>
            <View
              style={{
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.cellRight}>{distace}</Text>
              <Text style={styles.cellRight}>+ {coste}</Text>
            </View>
          </View>
        )}
        <Pressable
        onPress={()=>handleBankInfo()}
        style={status === "Por pagar" || status === "Rodando" ? styles.bankInfo : {display:"none"}}
        >
        <View style={{ flexDirection: "row", gap: 15 }}>
          <FontAwesome5 name="portrait" size={24} color="#01135B" />
            <Text style={styles.textTitel}>Cuentas Bancarias</Text>
          </View>
          
          {dropdawnActive === "bankInfo" ? (
            <MaterialIcons name="keyboard-arrow-up" size={30} color="#01135B" />
          ) : (
            <MaterialIcons name="keyboard-arrow-down" size={30} color="#01135B" />
          )}
        </Pressable>

        {dropdawnActive === "bankInfo" && (
          <View style={styles.bankAccountInfo}>
            <Text>Cuentas Bancarias</Text>

          {banksAccounts.map((item,index)=> <ItemBankList key={index} item={item} />)}

          </View>
        )}


        <Pressable
          style={styles.MoreDetailes}
          onPress={() => handleMoreDetails()}
        >
          <View style={{ flexDirection: "row", gap: 15 }}>
          <MaterialIcons name="sticky-note-2" size={24} color="#01135B" />
            <Text style={styles.textTitel}>Mas de Detalles</Text>
          </View>
          {dropdawnActive === "moreDetails" ? (
            <MaterialIcons name="keyboard-arrow-up" size={30} color="#01135B" />
          ) : (
            <MaterialIcons name="keyboard-arrow-down" size={30} color="#01135B" />
          )}
        </Pressable>
        {dropdawnActive === "moreDetails" && (
          <View>
            <View style={styles.cell}>
              <Text style={styles.cellLeft}>Comentario</Text>
              <Text style={styles.cellRight}>...</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellLeft}>Solicitado</Text>
              <Text style={styles.cellRight}>14 Oct 2023 10:37 am</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellLeft}>Hora Servicio</Text>
              <Text style={styles.cellRight}>14 Oct 2023 10:37 am</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellLeft}>Tomado</Text>
              <Text style={styles.cellRight}>14 Oct 2023 10:37 am</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellLeft}>Finalizad</Text>
              <Text style={styles.cellRight}>14 Oct 2023 10:37 am</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellLeft}>Pagado</Text>
              <Text style={styles.cellRight}>...</Text>
            </View>
          </View>
        )}
      </View>
        
      <Pressable  onPress={()=>handleModalPay()} style={status ==="Por pagar" || status === "Rodando" ? styles.ButtonPay : {display:"none"}}>
      <MaterialIcons name="payments" size={35} color="#fff" />
      </Pressable>

      <Modal transparent={true}
        animationType="slide"
        visible={isOpenModalPay}>
      <ModalMakePay handleModalPay={handleModalPay} />
      </Modal>

    </SafeAreaView>
  );
};

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
    marginVertical: 20,
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

  dropdawn: {
    borderWidth: 1,
    borderColor: "#888",
    width: "90%",
    borderRadius: 20,
    marginTop: 20,
  },

  invoiceDetailes: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    width: "100%",
    alignItems: "center",
   
  },

  MoreDetailes: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    width: "100%",
    alignItems: "center",
    borderTopWidth:1,
    borderTopColor:"#888"
 
  },

  bankInfo:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    width: "100%",
    alignItems: "center",
    borderTopWidth:1,
    borderTopColor:"#888"
  },

  textTitel:{
    fontSize:14,
    fontFamily: "roboto-condensed",
    color:"#01135B",
  },
  cellInvoice: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#888",
  },

  infoInvoice: {
    flexDirection: "row",
  },

  typeService: {
    color: "#01135B",
    fontFamily: "roboto-condensed",
    fontSize: 16,
  },
  ButtonPay:{
    backgroundColor:'#01135B',
    borderRadius:50,
    padding:10,
    position:"absolute",
    right:25,
    bottom:30
  }
});

export default DetailsServicesScreen;
