import React,{useState} from 'react'
import { Text,View,StyleSheet,Pressable,SafeAreaView} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


const ModalBankList = ({handleModalBank}) => {
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
  return (
    

    <Pressable onPress={()=>handleModalBank()} style={{alignItems:"center",flex:1,paddingTop:140,backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
            
    <View style={{width:"83%",backgroundColor:"#fff"}}>

    <View style={{padding:15, flexDirection:"row",backgroundColor:"#97999D",borderBottomColor:"#01135B",borderBottomWidth:3}}>
    <MaterialIcons style={{width:"10%",height:"100%",marginRight:5}} name="account-balance-wallet" size={30} color="#616161" />
    <Text style={{width:"90%",fontSize:11,color:"#01135B"}} >Cuenta receptora</Text>
    </View>
    <View style={{width:"100%"}}>

    {bankAccounts.map(({bank},index)=>(
        <Pressable key={index} style={{width:"100%",padding:10}}> 
      <Text>
        {bank}
        </Text>
      </Pressable>
     )
     )}
     </View>

  </View>
    </Pressable>
  )
}

export default ModalBankList