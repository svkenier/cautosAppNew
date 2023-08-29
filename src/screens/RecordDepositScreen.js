import React,{useState} from 'react'
import { Text,SafeAreaView,View,StyleSheet,Pressable, Modal} from 'react-native'
// import { Picker } from '@react-native-picker/picker';
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import ModalAddPhoto from '../components/ModalAddPhoto';


const RecordDepositScreen = () => {

  const [isOpenModalPhoto, setIsOpenModalPhoto] = useState(false)
  const [isOpenModalBank, setIsOpenModalBank] = useState(false)

  const bankAccounts =[
    {
        bank:'Reserve',
        money:"USD",
        accountNumber:"cautosca",
        titular:"CAUTOS, C.A.",
        cedula:"J-412396196",
        email:"admicautosca@gmail.com"
    },
    {
        bank:'Bank of America',
        money:"USD",
        accountNumber:"cautosca",
        titular:"CAUTOS, C.A.",
        cedula:"J-412396196",
        email:"admicautosca@gmail.com"
    },
    {
        bank:'Banesco',
        money:"VES",
        accountNumber:"cautosca",
        titular:"CAUTOS, C.A.",
        cedula:"J-412396196",
        email:"admicautosca@gmail.com"
    }
]


    const navigation = useNavigation()

    let [fontLoaded] = useFonts(Fonts);

  if (!fontLoaded) {
    return <View />;
  }

  const handleModalPhoto =()=>{
    setIsOpenModalPhoto(!isOpenModalPhoto)
  }

  const handleModalBank =()=>{
    setIsOpenModalBank(!isOpenModalBank)
  }


  return (
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
        
        {/* <Pressable onPress={()=>handleModalBank() } style={{width:"100%"}}>
        <CustomInput style={styles.input} icon={<MaterialIcons name="account-balance-wallet" size={24} color="#8c8c8c" />} label='Cuenta receptora' />
        </Pressable> */}

        {/* <Picker style={{width:"90%",borderRadius:50,borderColor:"red",borderWidth:3}} mode='dialog'>
          <Picker.Item label="Cuenta receptora" value="" />
          <Picker.Item label="Opción 1" value="option1" />
        </Picker> */}
        <CustomInput style={styles.input}  label='Monto' icon={<Text style={styles.iconBs} >Bs</Text>}/>
        <CustomInput style={styles.input} label='Referencia' icon={<MaterialIcons name="receipt-long" size={24} color="#8c8c8c" />}/>
        <CustomInput style={styles.input} label='Fecha' icon={<MaterialIcons name="insert-invitation" size={24} color="#8c8c8c" />}/>
        
        
        </View>

        <Pressable  onPress={handleModalPhoto} style={styles.containerIcon}>
        <MaterialIcons name="add-a-photo" size={30} color="#fff" />
        </Pressable>

        
        <CustomButton textButton="registrar" typeButton="terseary" />
        </View>

        {/* modaal Photo*/}

        <Modal transparent={true} animationType='slide' visible={isOpenModalPhoto} >
          <ModalAddPhoto handleModalPhoto={handleModalPhoto} />
        </Modal>

        {/* modal de BankList */}

         {/* <Modal visible={isOpenModalBank} animationType='slide'>

        </Modal>  */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root:{
    alignItems:"center",
    width:"100%",
    flex:1
  },
  iconBack:{
    marginTop:30,
    marginLeft:25,
    alignSelf:"flex-start"
  },
  title:{
    fontFamily:"teko-medium",
    fontSize:34,
    color:"#01135B",
    
  },
  subTitle:{
    fontFamily:"roboto-condensed",
    fontSize:19.6,
    color:"#01135B",
    marginVertical:10
  },
  containerInput:{
   gap:10,
   width:"90%",
   alignItems:"center",
   marginTop:10,
  
  
  },
  input:{
    width:"80%",
    borderRadius:50
  },

  iconBs:{
    color:"#8c8c8c",
    fontSize:16
  },

  containerIcon:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#01135B",
    padding: 15,
    borderRadius: 50,
    position:"absolute",
    right:20,
    bottom:70,
  },

  containerButton:{
    width:"100%",
    flex:1,
    justifyContent:"space-between",
    alignItems:"center",
 
  },
 
})

export default RecordDepositScreen