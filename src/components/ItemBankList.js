import React from 'react'
import { View,Text,StyleSheet,SafeAreaView } from 'react-native'

const ItemBankList = ({item}) => {

    const {bank} = item
     
  return (
    <SafeAreaView>
        <View>
            <Text>{bank}</Text>
            <Text></Text>
        </View>
        <View>
            <Text></Text>
            <Text></Text>
        </View>
        <View>
            <Text></Text>
            <Text></Text>
        </View><View>
            <Text></Text>
            <Text></Text>
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
})

export default ItemBankList