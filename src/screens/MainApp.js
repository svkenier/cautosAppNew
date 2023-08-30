import React from 'react'
import SigninScreen from './SigninScreen'
import { StyleSheet, View } from 'react-native'
import RegisterScreen from './RegisterScreen'
import MapScreen from "./MapScreen";
import BrowserScreen from './BrowserScreen';
import { NavigationContainer }  from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StopsProvider } from '../context/StopsProvider';
import StopsListScreen from './StopsListScreen';
import CautosBancoScreen from './CautosBancoScreen';
import ServiceHistoryScreen from './ServiceHistoryScreen';
import SwapScreen from './SwapScreen';
import BanksScreens from './BanksScreens';
import RecordDepositScreen from './RecordDepositScreen';
import ServiceExtraurbanoScreen from './ServiceExtraurbanosScreen';

const Stack = createNativeStackNavigator()
const MainApp = () => {

  return (
    <StopsProvider>
      
    <View style={styles.root}>
      <NavigationContainer>
     
      <Stack.Navigator  initialRouteName="login">
      <Stack.Screen  options={{headerShown:false}} name="login" component={SigninScreen} />
      <Stack.Screen  options={{headerShown:false}} name="register" component={RegisterScreen} />
      <Stack.Screen options={{headerShown:false}} name="map" component={MapScreen} />
      <Stack.Screen options={{headerShown:false }} name="browser" component={BrowserScreen} />
      <Stack.Screen options={{headerShown:false }} name="stopsList" component={StopsListScreen} />
      <Stack.Screen options={{headerShown:false }} name="Cautos Banco" component={CautosBancoScreen} />
      <Stack.Screen options={{headerShown:false }} name="swapScreen" component={SwapScreen} />
      <Stack.Screen options={{headerShown:false}} name="banksScreen" component={BanksScreens} />
      <Stack.Screen options={{headerShown:false}} name="recordDepositScreen" component={RecordDepositScreen} />
      <Stack.Screen options={{headerShown:false }} name="Historial de sevicios" component={ServiceHistoryScreen} />
      <Stack.Screen options={{headerShown:false }} name="Servicios extraurbanos" component={ServiceExtraurbanoScreen} />
      </Stack.Navigator>


      </NavigationContainer>
    </View>
    </StopsProvider>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default MainApp