import { View, StyleSheet,TextInput,Text } from "react-native";
import React, {useState} from "react";
import { MaterialIcons } from '@expo/vector-icons';




const CustomInput = ({iconRight,styleIconLeft,label,icon,name,helperText,onBlur, value, onChangeText, placeholder, keyboardType }) => {
  
  const [inFocus, setInFocus] = useState(false)

  const handleBlur = (onBlur,value,onChangeText) =>{
      onBlur
      console.log("valor",onChangeText)
    // if (value.length > 0) {
    //   setInFocus(false);
    // }
  }

  const handleFocus = ()=>{
    setInFocus(true);
  }

  return (
    <View style={helperText ? styles.containerError: styles.container}>
      <View style={{position:"absolute",zIndex:1,left:20,top:12}}>
      {icon}
      </View>
      <Text style={inFocus?styles.labelActive:styles.label}>
      {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        onFocus={() => handleFocus()}
        // inputStyle={styles.input}
        // inputContainerStyle={styles.containerInput}
        style={{
        width:"80%",
        height:"100%",
        alignSelf:"flex-end",
        paddingTop:5
        
      
      }}
        value={value}
        name={name}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onBlur={onBlur}
        // variant="filled"
        // helperText={helperText}
        // label={label}
        // leading={icon}
        // leadingContainerStyle={styleIconLeft}
        // placeholderTextColor="#000"
        
      />
       <View style={{position:"absolute",zIndex:1,right:20,top:12}}>
      {helperText && <MaterialIcons name="error" size={24} color="red" />}
      </View>

      <View style={{position:"absolute",zIndex:1,bottom:-18,}} >
        {helperText}
      </View>

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
    position:"relative",
    borderRadius:50,
    backgroundColor:"#fff",
    width:"95%",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginVertical:5
    
    
  },

  containerError: {
    position:"relative",
    borderRadius:50,
    backgroundColor:"#fff",
    width:"95%",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    borderColor:"red",
    borderWidth:2,
    marginVertical:5
    
    
  },

  input: {
  width: "100%",
 
  

  },

  labelActive:{
    position:"absolute",
    fontSize:10,
    width:"75%",
    right:15,
    top:0,

  },

  label:{
  position:"absolute",
  width:"75%",
  right:15,
},

  containerInput:{
    width:"90%",
    height: 45,
    borderWidth:0,
    backgroundColor:"#fff",
 
   
  },

});

export default CustomInput;
