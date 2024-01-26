import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const vehicles = [
  {
    vehicle: 'Carro',
    price: 2.98,
    icon: <MaterialIcons name="local-taxi" size={32} color="#888" />,
  },
  {
    vehicle: 'Moto',
    price: 1.8,
    icon: <FontAwesome5 name="motorcycle" size={24} color="#888" />,
  },
  {
    vehicle: 'Camioneta',
    price: 4.68,
    icon: <FontAwesome5 name="shuttle-van" size={24} color="#888" />,
  },
  {
    vehicle: 'Bicicleta',
    price: 1.3,
    icon: <FontAwesome5 name="bicycle" size={24} color="#888" />,
  },
  {
    vehicle: 'Delivery de carro',
    price: 2.98,
    icon: <MaterialIcons name="taxi-alert" size={24} color="#888" />,
  },
];

const Slider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const renderItem = ({ item, index }) => {
    const isSelected = index === activeIndex;
    const iconSize = isSelected ? 30 : 24; // Tamaño del icono seleccionado
    const iconColor = isSelected ? "#fff" : "#888"; // Color del icono seleccionado
  
    return (
      <View style={isSelected ? styles.selectedItemContainer : styles.itemContainer}>
        {React.cloneElement(item.icon, { size: iconSize, color: iconColor })}
        <Text style={styles.itemText}>{item.vehicle}</Text>  
          <Text style={styles.itemPrice}>{`$${item.price}`}</Text>
      
      </View>
    );
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.snapToPrev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.snapToNext();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
      <Pressable onPress={handlePrev} style={styles.arrowButton}>
        <MaterialIcons name="keyboard-arrow-left" size={30} color="#FFF" />
      </Pressable>
        <Carousel
          ref={carouselRef}
          data={vehicles}
          renderItem={renderItem}
          sliderWidth={245}
          itemWidth={95}
          loop={true}
          loopClonesPerSide={vehicles.length}
          onSnapToItem={(index) => {
            setSelectedIndex(index);
            setActiveIndex(index);
          }}
        />
      <Pressable onPress={handleNext} style={styles.arrowButton}>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="#FFF" />
      </Pressable>
      </View>
      <Pagination
        dotsLength={vehicles.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: "#01135B",
    height: "20%",
    borderRadius: 50
  },
  carouselContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "95%",
    height: "75%"
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
    width: "100%",
    height: "100%",
  },
  selectedItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 15,
  },
  itemText: {
    marginTop: 5,
    fontSize: 12,
    color: '#FFF',
    height: "35%",
    width: "100%",
    textAlign: "center",
  },
  itemPrice: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
    height: "25%",
    width: "100%",
    textAlign:"center"
  },
    arrowButton: {
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
  },
  paginationContainer: {
    marginTop: 10,
    paddingVertical: 5,
    backgroundColor: 'transparent',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
});

export default Slider;