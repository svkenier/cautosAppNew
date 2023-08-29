import { View, StyleSheet } from "react-native";
import React from "react";
 import { Hoshi } from 'react-native-textinput-effects';



const InputCustom = ({iconWidth,inputPadding,iconColor,iconSize,iconClass,label,iconName,name,onBlur, value, onChangeText, keyboardType }) => {
  return (
    <View style={styles.container}>
      <Hoshi

       iconClass={iconClass}
       iconName={iconName}
       iconColor={iconColor}
       iconSize={iconSize}
       iconWidth={iconWidth}
       inputPadding={inputPadding}
        value={value}
        name={name}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onBlur={ onBlur }
        label={label}
        style={{ width:"100%"}}
        labelStyle={{ }}
        inputStyle={{ }}
        inputContainerStyle={{}}
        borderHeight={0}
      


       
        
        
       
     
      
        
      />
      
      {/* {
      icon=="user"&& <Text style={styles.containerIcon}><FontAwesome5  name="user" size={24} color="#01135B" /></Text> || 
      icon=="email"&& <Text style={styles.containerIcon}><MaterialCommunityIcons name="email-outline" size={24} color="#01135B" /></Text> ||
      icon=="id"&& <Text style={styles.containerIcon}><MaterialIcons name="badge" size={24} color="#01135B" /></Text> ||
      icon=="phone"&& <Text style={styles.containerIcon}><MaterialIcons name="smartphone" size={24} color="#01135B" /></Text> ||
      icon=="city"&& <Text style={styles.containerIcon}><MaterialIcons name="location-city" size={24} color="#01135B" /></Text> ||
      icon=="location"&& <Text style={styles.containerIcon}><MaterialIcons name="location-on" size={24} color="#01135B" /></Text> ||
      icon=="lock"&& <Text style={styles.containerIcon}><MaterialIcons name="lock-outline" size={24} color="#01135B" /></Text> 
     } */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems:"center",
  
   
    
  },

  input: {
  width: "100%",
  

  },

  containerInput:{
    width:"90%",
    height: 45,
    borderWidth:0,
    backgroundColor:"#fff",
 
   
  },

});

export default InputCustom;
