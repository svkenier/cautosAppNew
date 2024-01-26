// import { View, StyleSheet } from "react-native";
// import { TextInput } from "@react-native-material/core";
// import React from "react";




// const CustomInput = ({ styleIconLeft, label, icon, name, helperText, onBlur, value, onChangeText, placeholder, keyboardType }) => {
//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder={placeholder}
//         inputStyle={styles.input}
//         inputContainerStyle={styles.containerInput}
//         style={{ borderRadius: 50, backgroundColor: "#fff", width: "100%", alignItems: "center", paddingTop: 5, }}
//         value={value}
//         name={name}
//         onChangeText={onChangeText}
//         keyboardType={keyboardType}
//         onBlur={onBlur}
//         variant="filled"
//         helperText={helperText}
//         label={label}
//         leading={icon}
//         leadingContainerStyle={styleIconLeft}
//         placeholderTextColor="#000"
//         underlineColorAndroid="transparent"
//       />

//       {/* {
//       icon=="user"&& <Text style={styles.containerIcon}><FontAwesome5  name="user" size={24} color="#01135B" /></Text> || 
//       icon=="email"&& <Text style={styles.containerIcon}><MaterialCommunityIcons name="email-outline" size={24} color="#01135B" /></Text> ||
//       icon=="id"&& <Text style={styles.containerIcon}><MaterialIcons name="badge" size={24} color="#01135B" /></Text> ||
//       icon=="phone"&& <Text style={styles.containerIcon}><MaterialIcons name="smartphone" size={24} color="#01135B" /></Text> ||
//       icon=="city"&& <Text style={styles.containerIcon}><MaterialIcons name="location-city" size={24} color="#01135B" /></Text> ||
//       icon=="location"&& <Text style={styles.containerIcon}><MaterialIcons name="location-on" size={24} color="#01135B" /></Text> ||
//       icon=="lock"&& <Text style={styles.containerIcon}><MaterialIcons name="lock-outline" size={24} color="#01135B" /></Text> 
//      } */}

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     alignItems: "center",
//   },

//   input: {
//     width: "100%",
//   },

//   containerInput: {
//     width: "90%",
//     height: 45,
//     borderWidth: 0,
//     backgroundColor: "#fff",
//   },

// });

// export default CustomInput;
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de importar los iconos adecuados

const CustomInput = ({ placeholder, icon, ...restProps }) => {
  
  return (
    <View style={styles.inputContainer}>
      <Ionicons name={icon} size={20} color="gray" style={styles.icon} />
      <TextInput
        onFocus={() => console.log("focus")}
        style={styles.input}
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "90%",
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderColor:"gray",
    paddingVertical: 10,
    borderColor: "gray"
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
});

export default CustomInput;
