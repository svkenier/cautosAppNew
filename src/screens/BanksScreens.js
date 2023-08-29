import React ,{useState}from 'react'
import { Text,SafeAreaView,Pressable,StyleSheet,View } from 'react-native'
import { MaterialIcons} from '@expo/vector-icons';
import Dropdown from '../components/Dropdown'
import { useFonts } from "expo-font";
import { Fonts } from "../utils/fontsObject";
import { useNavigation } from "@react-navigation/native";

const BanksScreens = () => {

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

    const [active, setActive] = useState(null)

    const handlePress =(dropdawnActive)=>{
        active === dropdawnActive ? setActive(null):setActive(dropdawnActive)
    }

    const navigation = useNavigation()

    let [fontLoaded] = useFonts(Fonts);

  if (!fontLoaded) {
    return <View />;
  }

  return (
    <SafeAreaView style={styles.root}>
        <View style={styles.iconBack}>
            <Pressable onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
            </Pressable>
          </View>
        <Text style={styles.title}>CUENTAS BANCARIAS</Text>
        
        <View style={styles.bankList} >
        {bankAccounts.map((item,index)=><Dropdown key={index} item={item} index={index} handlePress={handlePress} active={active} />)}
        </View>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    root:{
        width:"100%",
        flex:1,
        padding: 20,
    },
    iconBack:{
        marginTop:20,
    },

    title:{
        width:"100%",
        textAlign:"center",
        marginVertical:20,
        color:"#01135B",
        fontFamily:"teko-medium",
        fontSize:34,
    },
    bankList:{
        width:"100%",
        borderColor:"#8c8c8c",
        borderWidth:0.5,
        borderRadius:10

    }
})

export default BanksScreens